# 记k8s安装流程

> 本文选用的操作系统环境为Centos 7.9 amd64

## 0、开始之前

服务器配置

| 描述    | 主机名 | IP地址（静态） |
| ------- | ------ | -------------- |
| master  | k8s.01 | 192.168.50.118 |
| worker1 | k8s.02 | 192.168.50.220 |
| worker2 | k8s.03 | 192.168.50.140 |

本文系统采用最小化安装，可能手动安装以下软件

```bash
# 安装软件
yum install -y git vim lsof
```

#### 修改hostname

便于通过主机名区分节点

```bash
vim /etc/hostname
```

```
k8s.01
```

#### 关闭swap分区

kubelet启动要求禁用swap分区

```bash
# 临时禁用
swapoff -a
# 永久禁用
## 编辑文件系统，注释swap分区配置
vim /etc/fstab
```

```
...
# /dev/mapper/centos-swap swap                    swap    defaults        0 0
```

```bash
# 验证，若Swap行均为0，即已禁用
free -m
```



#### 关闭系统防火墙

```bash
# 关闭防火墙，并取消开机启动
systemctl disable --now firewalld
# 检查防火墙状态
systemctl status firewalld
```

#### 关闭selinux

```bash
# 临时禁用 selinux
setenforce 0
# 永久关闭
vim /etc/selinux/config
```

```
...
SELINUX=disabled
```

```bash
# 查看selinux状态，如果不为enforcing，即已禁用
getenforce
```

#### 配置Host

```bash
# 配置机器Host
vim /etc/hosts
```

```
...
192.168.50.118 k8s.01
192.168.50.220 k8s.02
192.168.50.140 k8s.03
```

#### 桥接IPv4流量

将桥接的IPv4流量传递到iptables链

部分IPv4流量不能走iptables链，由于linux内核存在一个过滤器，所有流量都会经过它，然后再匹配流量是否可进入当前应用进程进行处理，将会导致流量丢失

```bash
# 创建k8s.conf文件
vim /etc/sysctl.d/k8s.conf
```

```
net.bridge.bridge-nf-call-ip6tables=1
net.bridge.bridge-nf-call-iptables=1
net.ipv4.ip_forward=1
vm.swappiness=0
```

```bash
# 应用sysctl参数
sysctl --system
```

## 1、安装Docker运行时

本文选择使用Docker Engine作为Docker运行时

所有节点的Docker运行时版本要求一致

```bash
# 安装配置工具
yum install -y yum-utils
# 配置下载源
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 安装Docker
yum install -y docker-ce-20.10.9 docker-ce-cli-20.10.9 containerd.io
# 启动Docker并设置开机启动
systemctl enable --now docker
```

#### 设置镜像加速、修改驱动程序

本文中k8s与docker使用systemd作为驱动程序

>  镜像加速地址需自行准备
>
> https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors

```bash
# 创建/修改daemon配置文件
vim /etc/docker/daemon.json
```

```json
{  
	"registry-mirrors": ["https://hn95aeb8.mirror.aliyuncs.com"],
    "exec-opts": ["native.cgroupdriver=systemd"]  
}
```

```bash
# 重启服务
systemctl daemon-reload
systemctl restart docker
```

## 2、安装kubernetes

### 配置yum源

本文使用阿里云镜像源

```bash
vim /etc/yum.repos.d/kubernetes.repo
```

```
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
exclude=kubelet kubeadm kubectl
```

```bash
# 安装1.20.11版本（最新版遇到问题：无法初始化节点；蓝鲸要求1.18或1.20版本：API有差异）
yum -y install kubelet-1.20.11 kubeadm-1.20.11 kubectl-1.20.11 --disableexcludes=kubernetes
# 设置kubelet开机启动（先不用启动，kubeadm初始化时会启动）
systemctl enable kubelet
```



### 初始化master节点

```bash
kubeadm init \
--apiserver-advertise-address=192.168.50.118 \
--image-repository registry.aliyuncs.com/google_containers \
--kubernetes-version v1.20.11 \
--service-cidr=10.96.0.0/12  \
--pod-network-cidr=10.244.0.0/16
```

> 参数释义：
>
> |                               |                                                      |
> | ----------------------------- | ---------------------------------------------------- |
> | --apiserver-advertise-address | 指定API Server的地址，即Kubernetes集群的主节点IP地址 |
> | --image-repository            | 指定使用的镜像仓库地址                               |
> | --kubernetes-version          | 指定Kubernetes版本号                                 |
> | --service-cidr                | 指定Service的IP地址范围                              |
> | --pod-network-cidr            | 指定Pod的IP地址范围                                  |

#### 初始化成功

##### 保存配置

照提示保存集群配置，以便后续使用kubectl等命令进行操作

```bash
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config
export KUBECONFIG=/etc/kubernetes/admin.conf
```

##### 加入集群所需命令

```bash
kubeadm join 192.168.50.118:6443 --token jqizdj.ycnigwxjozy4d8hm --discovery-token-ca-cert-hash sha256:92e7a06db31a35fdd633e0febdaa08c4ec1ce84f38832e1e06acab208aa9cb14
```



## 3、部署容器网络：CNI网络插件（仅需master配置）

#### 准备配置文件

```bash
# 拉取配置文件模板
wget https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml
# 按需修改配置文件，修改Newwork与执行kubeadm init中的--pod-network-cidr参数一致
vim kube-flannel.yml
```

```yaml
...
net-conf.json: |
    {
      "Network": "10.244.0.0/16",
      "Backend": {
        "Type": "vxlan"
      }
    }
...
```

#### 通过docker部署flannel

```bash
docker pull rancher/mirrored-flannelcni-flannel-cni-plugin:v1.1.0
docker pull rancher/mirrored-flannelcni-flannel:v0.20.1
```

#### 应用配置

```bash
kubectl apply -f kube-flannel.yml
```
