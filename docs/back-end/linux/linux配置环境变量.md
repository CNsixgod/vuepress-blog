---
title: linux配置环境变量
date: 2022/7/13
categories:
  - linux
permalink: /docs/back-end/1fcf987c.html
---

查看 path

```sh
echo path
```

方法一：

```sh
export PATH=/usr/local/bin:$PATH
#配置完后可以通过 echo $PATH 查看配置结果。
#生效方法：立即生效
#有效期限：临时改变，只能在当前的终端窗口中有效，当前窗口关闭后就会恢
#复原有的 path 配置 #用户局限：仅对当前用户
```

方法二：

```sh
#通过修改.bashrc 文件:
vim ~/.bashrc #在最后一行添上：
export PATH=/usr/local/bin:$PATH
#生效方法：（有以下两种）
#1、关闭当前终端窗口，重新打开一个新终端窗口就能生效
#2、输入“source ~/.bashrc”命令，立即生效 #有效期限：永久有效 #用户局限：仅对当前用户

```

方法三：

```sh
#通过修改 profile 文件:
vim /etc/profile
export PATH=/usr/local/bin:$PATH
#生效方法：系统重启
#有效期限：永久有效
#用户局限：对所有用户

```

方法四：

```sh
#通过修改 environment 文件:
vim /etc/environment
在 PATH="/usr/local/sbin:/usr/sbin:/usr/bin:/sbin:/bin"中加入
":/usr/local/bin"
#生效方法：系统重启
#有效期限：永久有效
#用户局限：对所有用户

```
