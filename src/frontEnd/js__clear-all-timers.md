# 清除浏览器中所有的定时器

## 知识点

使用 `setInterval()` 与 `setTimeout()` 时，返回值是一个自增的正整数，表示计时器编号，分别称为 `intervalId` 和 `timeoutId`，他们是共用同一个编号池。
技术上，`clearTimeout()` 和 `clearInterval()` 可以互换。但是，为了避免混淆，建议不要混用取消定时函数。

## 实现

通过上述知识，我们知道了定时器ID是一个自增的正整数，如想清除当前页面中所有的定时器，我们只需要声明一个新的定时器，获取其定时器ID，然后使取消定时函数遍历清除小于这个ID的定时器即可

举一个栗子：
```javascript
let id = setInterval(()=>{}, 1000);
let r = Math.random() * 100;
for (let i = 1; i <= id; i++) {
    clearInterval(i)
}
```

这样一来，我们便清除了页面中所有的定时器了。

