# 安装Go
<span style='background: #67196b;color:#fff;border: 2px solid #87218d;border-radius: 4px;padding: 0 8px;font-size: 12px'>Tutorial for CentOS</span>

:::tip
EPEL源中已包含此软件
:::

本文使用官方构建包进行安装

## 下载构建包

访问[Go官网](https://go.dev/dl/)，根据架构及系统选择合适的构建包

本文假设的架构为 `amd64` 、操作系统为 `Centos 7.9`

选择下载 `go1.20.2.linux-amd64.tar.gz` 作为构建包

## 解压至指定目录

```bash
tar -C /usr/local -xzf go1.20.2.linux-amd64.tar.gz
```

## 配置环境变量

```bash
vim /etc/profile
```

```properties
# 追加以下配置项
export GO_ROOT=/usr/local/go
export PATH=$PATH:$GO_ROOT/bin
export GO_PATH=/go
# 镜像源
export GOPROXY=https://mirrors.aliyun.com/goproxy/,direct
```

```bash
source /etc/profile
# 打开gomod开关
go env -w GO111MODULE=on
```

## 大功告成

您可以使用以下命令查看go的版本号

```bash
go version
```

```bash
> go version go1.20 linux/amd64
```

