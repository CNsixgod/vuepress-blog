---
title: linux安装node
date: 2022/7/13
categories:
  - linux
permalink: /docs/back-end/2fac4da8.html
---

```sh
cd /usr/local/src/
wget https://npm.taobao.org/mirrors/node/v14.15.5/node-v14.15.5-linux-x64.tar.xz
tar -xvf node-v14.15.5-linux-x64.tar.xz
mv node-v14.15.5-linux-x64 nodejs

ln -s /usr/local/src/nodejs/bin/npm /usr/local/bin/
ln -s /usr/local/src/nodejs/bin/node /usr/local/bin/

# .bashrc
export PATH=/usr/local/src/nodejs/bin:$PATH
```
