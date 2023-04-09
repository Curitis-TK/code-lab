# 客户端存储

现代 Web 浏览器提供了很多在用户 Web 客户端存放数据的方法 ，如下

- Cookies
- WebStorage
  - LocalStorage
  - SessionStorage
- IndexedDB
- ~~WebSQL~~（已弃用）



## 快速比较

| 类型           | 大小            | 保存时间     | 存储形式 | 跨域                                          |
| -------------- | --------------- | ------------ | -------- | --------------------------------------------- |
| Cookie         | 4KB             | 可配置时间   | 字符串   | 可配置Domain                                  |
| SessionStorage | 5MB             | 窗口关闭清除 | 对象     | 受同源限制                                    |
| LocalStorage   | 5MB             | 持久化存储   | 对象     | 受同源限制，可通过iframe与postMessage实现跨域 |
| IndexedDB      | 可用磁盘空间50% | 持久化/临时  | 对象*    | 受同源限制                                    |



## 传统方法：Cookies

从早期的网络时代开始，网站就使用 [cookies](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies) 来存储信息，以在网站上提供个性化的用户体验。它们是网络上最早最常用的客户端存储形式。

Cookie可以通过以下2种方式设置：

- 服务器使用 `Set-Cookie` 响应头向浏览器发送 Cookie 信息
- JavaScript通过 `document.cookie` 读取、操作Cookie

一条cookie记录可以包含以下属性

| 属性       | 类型                    | 功能                                      |
| ---------- | ----------------------- | ----------------------------------------- |
| Name       | string                  | 键                                        |
| Value      | string                  | 值                                        |
| Domain     | string                  | 指定了哪些主机可以接受 Cookie             |
| Path       | string                  | 指定了URL，匹配的请求地址将会携带此Cookie |
| Expiration | date                    | cookie 的最长有效时间                     |
| Same Site  | 'None'\|'Lax'\|'Strict' | 指定是否/何时可以通过跨站点请求发送       |
| Host Only  | boolean                 |                                           |
| Session    | boolean                 |                                           |
| Secure     | boolean                 |                                           |
| Http Only  | boolean                 |                                           |

:::warning

时至今日，cookies已经开始被认为是过时的，存在存在各种[安全问题](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#安全)、无法存储复杂数据等问题。

:::

## 相关文章

- [mdn web docs](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)

## 对比

| 类型           | 大小 | 保存时间       | 存储形式 | 跨域                         |
| -------------- | ---- | -------------- | -------- | ---------------------------- |
| Cookie         | 4KB  | 可配置有效时间 | 字符串   | 可配置Domain                 |
| SessionStorage | 5MB  | 窗口关闭时清除 | 对象     | 无法跨域                     |
| LocalStorage   | 5MB  | 需手动清除     | 对象     | 可通过iframe+postMessage实现 |

综上，个人偏好在存入用户token时，使用Cookie；存入用户基本信息、权限菜单等复杂数据对象时，使用LocalStorage。当用户不希望账号保持登录时，可使用SessionStorage替代Cookie，达到关闭即退出的效果。