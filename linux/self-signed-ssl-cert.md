# 自签SSL证书

:::tip

经测试可用于Nginx SSL配置

:::

:::warning

本方法生成的证书不是由受信任的CA颁发的，在使用时可能会出现警告。

如果需要更安全的SSL证书，建议使用由受信任的CA颁发的SSL证书。

:::

## 生成私钥（KEY）

```bash
openssl genrsa -out server.key 2048
```



## 生成证书签名请求（CSR）

```bash
openssl req -new -key server.key -out server.csr
```



## 自签证书

```bash
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

完成后，将生成证书文件 `server.crt` ，使用时一般与私钥 `server.key` 一同使用