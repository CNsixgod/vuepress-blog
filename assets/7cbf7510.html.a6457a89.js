import{_ as e,o as s,c,a as o}from"./app.da9c2790.js";const t={},d=o("<p>\u5BA2\u6237\u7AEF\u751F\u6210<code>ssh</code>\u5BC6\u94A5\u5BF9\uFF08\u4E0D\u4F1A\u7684\u53EF\u4EE5\u767E\u5EA6\uFF09</p><p>\u670D\u52A1\u5668\u914D\u7F6E</p><ul><li>\u68C0\u6D4B<code>ssh</code>\u670D\u52A1\u662F\u5426\u542F\u52A8 \uFF1A <code>netstat -ntlp | grep ssh</code></li><li>\u5982\u679C<code>ssh</code>\u670D\u52A1\u6CA1\u6709\u542F\u52A8 \uFF1A<code>service sshd restart \u6216\u8005 /etc/init.d/sshd</code></li><li>\u6DFB\u52A0\u5BA2\u6237\u7AEF\u516C\u94A5\uFF0C\u5C06\u5BA2\u6237\u7AEF\u7684\u516C\u94A5\u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u6DFB\u52A0\u5230 <code>vim /root/.ssh/authorized_keys</code>\u3002\uFF08\u8BE5\u6587\u4EF6\u914D\u7F6E\u4E86\u5141\u8BB8\u8FDE\u5165\u7684\u5BA2\u6237\u7AEF\u7684\u516C\u94A5\uFF09</li><li>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF1A<code>vim /etc/ssh/sshd_config</code> \u5C06<code>PermitRootLogin</code>\u503C\u6539 yes</li><li>\u91CD\u542F\u670D\u52A1 <code>service sshd restart \u6216\u8005 /etc/init.d/sshd restart</code></li></ul>",3),i=[d];function r(l,_){return s(),c("div",null,i)}var n=e(t,[["render",r],["__file","7cbf7510.html.vue"]]);export{n as default};