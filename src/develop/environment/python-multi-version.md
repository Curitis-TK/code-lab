# 安装多版本Python

## 安装

1. 前往[官网下载安装包](https://www.python.org/downloads/windows/)

2. 记录安装路径，建议将不同版本归档到同一文件夹下

   | 版本          | 路径              |
   | ------------- | ----------------- |
   | Python 2.7.18 | C:\Python\Python2 |
   | Python 3.11.3 | C:\Python\Python3 |

3. 安装时，不勾选 `添加到环境变量中` 配置项




## 配置环境

### 打开高级系统属性面板

1. 使用快捷键 `Win` + `R` 打开运行窗口，输入并打开 `SystemPropertiesAdvanced.exe`
2. 单击打开**系统变量**

### 配置变量
1. 根据个人需求，选择修改**用户变量**或**系统变量**

2. 在变量列表中找到 `Path` 变量 

3. 根据安装路径分别添加以下记录：

   ```
   C:\Python\Python2
   C:\Python\Python2\Scripts
   C:\Python\Python3
   C:\Python\Python3\Scripts
   ```

### 重命名python入口程序

- 以python2为主要应用，则需要前往 `C:\Python\Python3` 目录，将 `python.exe` 重命名为 `python3.exe`

- 以python3为主要应用，则需要前往 `C:\Python\Python2` 目录，将 `python.exe` 重命名为 `python2.exe`

#### 验证安装

以python2为主要应用为例

```bash
python --version
python3 --version
```

### 重新安装pip

以python2为主要应用为例：

```bash
# 更新python3中的pip
python3 -m pip install --upgrade pip --force-reinstall
```

完成安装后，进入 `C:\Python\Python3\Script` 目录，将 `pip.exe` 删除或更名，避免与python2中的pip冲突

#### 验证安装

```bash
pip --version
pip3 --version
```

