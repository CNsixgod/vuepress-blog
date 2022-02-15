---
title: linux安装node
categories:
  - - linux
    - installation
abbrlink: 3dad8e04
date: 2021-11-20T17:32:52.000Z
tags:
  - linux
  - node
readingShow: top
permalink: /f899fe3b/
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

