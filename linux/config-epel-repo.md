# 配置使用EPEL源

> EPEL (Extra Packages for Enterprise Linux) 是由 Fedora Special Interest Group 为企业 Linux 创建、维护和管理的一个高质量附加包集合适用于但不仅限于 Red Hat Enterprise Linux (RHEL), CentOS, Scientific Linux (SL), Oracle Linux (OL)

## 备份原有EPEL配置文件

如不存在此文件，忽略本步骤

```bash
mv /etc/yum.repos.d/epel.repo /etc/yum.repos.d/epel.repo.backup
```

## 下载EPEL配置文件

**本文以下使用腾讯云镜像**

可根据个人需要，自行选择阿里云或腾讯云等作为镜像源；

| 镜像源 | URL                              |
| ------ | -------------------------------- |
| 腾讯云 | http://mirrors.cloud.tencent.com |
| 阿里云 | http://mirrors.aliyun.com        |

```bash
# epel（RHEL5系列）
wget -O /etc/yum.repos.d/epel.repo http://mirrors.cloud.tencent.com/repo/epel-5.repo

# epel（RHEL6系列）
wget -O /etc/yum.repos.d/epel.repo http://mirrors.cloud.tencent.com/repo/epel-6.repo

# epel（RHEL7系列）
wget -O /etc/yum.repos.d/epel.repo http://mirrors.cloud.tencent.com/repo/epel-7.repo
```

## 重建缓存

```bash
yum clean all
yum makecache
```
