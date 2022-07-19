---
title: githubAction
date: 2022/2/13
tags:
  - CI/CD
categories:
  - github
permalink: /docs/front-end/699317ca.html
---

```yaml
// .github/workflows   自动化测试
name: test
on:
    push: // 当git push
        branches:
            - master
        paths: // 当这些路径文件变化
            - '.github/workflows/**'
            - '__test__/**'
            - 'src/**'
jobs:
    test:
        runs-on: ubuntu-latest

        steps:
            - uses: actions/checkout@v2 //第三方
            - name: Use Node.js
              uses: actions/setup-node@v1
              with:
                  node-version: 14
            - name: lint and test
              run: |
                  npm i
                  npm run lint
                  npm run test:remote

```

配置测试机

创建低权限账号。 root权限太高不安全

```
adduser work
passwd work
```

添加work 的sudo权限

```sh
whereis sudoers # 找到文件位置 /etc/sudoers
chmod u+w /etc/sudoers # 修改权限  u表示所有者 w 写权限 + 表示添加

vim /etc/sudoers
# 找到 `root    ALL=(ALL)   ALL`
# 添加 `work    ALL=(ALL)   ALL`
chomd u-w /etc/sudoers
```

然后使用work登录， 输入su 再输入root账号的密码  就拥有超级权限



#### 免密码登录

1. 登录主机  创建~/.ssh/authorized_keys
2. 修改文件夹权限
   - chmod 700 ~/.ssh
   - chmod 600 ~/.ssh/authorized_keys
3. 将本机的`id_rsa.pub` 粘贴进来

#### 软件安装

git

```
yum -y install git
```

docker, docker-compose



```yaml
name: deploy for dev

on:
    push:
        branches:
            - 'dev' # 只针对 dev 分支
        paths:
            - '.github/workflows/*'
            # - '__test__/**' # dev 不需要立即测试
            - 'src/**'
            - 'Dockerfile'
            - 'docker-compose.yml'
            - 'bin/*'

jobs:
    deploy-dev:
        runs-on: ubuntu-latest

        steps:
            - uses: actions/checkout@v2 # 获取最新代码
            - name: set ssh key # 临时设置 ssh key
              run: |
                  mkdir -p ~/.ssh/
                  echo "${{secrets.WFP_ID_RSA}}" > ~/.ssh/id_rsa # secret 在这里配置 https://github.com/imooc-lego/biz-editor-server/settings/secrets
                  chmod 600 ~/.ssh/id_rsa
                  ssh-keyscan "182.92.xxx.xxx" >> ~/.ssh/known_hosts
            - name: deploy # 部署
              run: |
                  ssh work@182.92.xxx.xxx "
                    # 【注意】用 work 账号登录，手动创建 /home/work/imooc-lego 目录
                    # 然后 git clone https://username:password@github.com/imooc-lego/biz-editor-server.git -b dev （私有仓库，使用 github 用户名和密码）
                    # 记得删除 origin ，否则会暴露 github 密码

                    cd /home/work/imooc-lego/biz-editor-server;
                    git remote add origin https://wangfupeng1988:${{secrets.WFP_PASSWORD}}@github.com/imooc-lego/biz-editor-server.git;
                    git checkout dev;
                    git pull origin dev; # 重新下载最新代码
                    git remote remove origin; # 删除 origin ，否则会暴露 github 密码
                    # 启动 docker
                    docker-compose build editor-server; # 和 docker-compose.yml service 名字一致
                    docker-compose up -d;
                  "
            - name: delete ssh key # 删除 ssh key
              run: rm -rf ~/.ssh/id_rsa
```









