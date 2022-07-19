---
title: linux安装git
date: 2022/7/13
tags:
  - linux
categories:
  - linux
  - installation
permalink: /docs/back-end/76ab7892.html
---

```sh
wget https://github.com/git/git/archive/v2.29.0.tar.gz

tar -zxvf v2.29.0.tar.gz -C /usr/local/src
cd /usr/local/src

mv git-2.29.0 git
#安装环境依赖
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker -y
# 卸载原有版本或安装环境依赖时安装的版本
yum remove git -y
# 编译到指定路径
make prefix=/usr/local/src/git all
# 安装到指定路径
make prefix=/usr/local/src/git install
```

```sh
#.bashrc
export GIT_HOME=/usr/local/src/git
export PATH=$PATH:${GIT_HOME}/bin

```
