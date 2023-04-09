# Jenkins添加NodeJS项目

借助Jenkins与Gitlab Webhook实现自动化构建与部署

> TODO：完善产物相关配置

## 开始之前

请确认您的Jenkins已包含以下内容/插件

- 可被访问的Gitlab代码仓库
- [Git plugin](https://plugins.jenkins.io/git) 
- [GitLab Plugin](https://plugins.jenkins.io/gitlab-plugin) 
- [NodeJS Plugin](https://plugins.jenkins.io/nodejs)
- [Publish Over SSH](https://plugins.jenkins.io/publish-over-ssh)



## 新建Item

1. 输入**任务名称**
2. 选择**Freestyle project**选项

完成后，单击**确定**，进行Item配置



## 源码管理

1. 选择**Git**作为源码管理工具
2. 根据指引，配置**仓库地址**、**认证账号**
3. *指定需要进行构建的分支（可选）*



## 构建触发器

1. 勾选启用Gitlab触发器：

   - [x] Build when a change is pushed to GitLab.

   > 请记下您的 `GitLab webhook URL`

2. 按需选择启用触发器，例如：
   - [x] Push Events
   - [x] Opened Merge Request Events
   - [x] ...

3. 点击**高级**按钮，生成 `Secret token`

   > 请记下您的  `Secret token`
   
   

## 构建环境
1. 勾选启用NodeJS环境
   - [x] Provide Node & npm bin/ folder to PATH
2. 选择适用于您的项目的**NodeJS Installation**




## 构建步骤

#### 添加Execute shell

```bash
# 构建
npm i -g yarn
yarn
yarn build
```

### 添加Execute shell

```bash
# 备份原有构建
mv /path-to-dist/dist /some-path-for-backup/dist_backup_$BUILD_NUMBER
# 更新部署
mv ./dist /path-to-dist/dist
```



## 构建后操作

> 用于联动Gitlab返回构建状态

### Publish build status to GitLab



:::tip

至此，已完成Jenkins方面的配置，接下来前往Gitlab完成余下配置

:::

## 配置Gitlab Webhook

前往Gitlab项目页，打开Webhook配置页

> Settings > Webhooks

1. 输入此前记下的 `GitLab webhook URL` 与 `Secret Token`
2. 按需选择触发器

完成添加后，可通过单击**Test**按钮测试Webhook是否生效

