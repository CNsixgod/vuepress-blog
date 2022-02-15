---
title: linux安装git
categories:
  - - linux
    - installation
abbrlink: 3e4d2f4b
date: 2021-11-20T18:21:10.000Z
tags:
  - linux
  - git
readingShow: top
permalink: /b006aef3/
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
