# 使用Python检查端口连通性

使用 Python 自带的 Web服务器，开启临时Web服务，用于测试端口连通性

不指定端口号时默认监听在 `8000` 端口

仅支持 `GET` 和 `HEAD` 方法

## Python2

Python2使用自带的 `SimpleHTTPServer` 模块

```bash
python -m SimpleHTTPServer <PORT>
```



## Python3

在Python3被合并到 `http.server` 模块中

```bash
python3 -m http.server <PORT>
```

