---
title: 服务器配置ssh
date: 2022/7/13
categories:
  - linux
permalink: /docs/back-end/7cbf7510.html
---

客户端生成`ssh`密钥对（不会的可以百度）

服务器配置

- 检测`ssh`服务是否启动 ： `netstat -ntlp | grep ssh`
- 如果`ssh`服务没有启动 ：`service sshd restart 或者 /etc/init.d/sshd`
- 添加客户端公钥，将客户端的公钥文件中的内容添加到 `vim /root/.ssh/authorized_keys`。（该文件配置了允许连入的客户端的公钥）
- 修改配置文件：`vim /etc/ssh/sshd_config` 将`PermitRootLogin`值改 yes
- 重启服务 `service sshd restart 或者 /etc/init.d/sshd restart`
