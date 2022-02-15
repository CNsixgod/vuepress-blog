const autoGetSidebarOptionBySrcDir = require("./vendor/sidebar-auto");
const path = require("path");
module.exports = {
  title: "学而不思则黄",
  description: "john's blog",
  theme: "reco",
  base: "/vuepress-blog/",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      //   {
      //     text: "xxxxx",
      //     items: [
      //       { text: "Github", link: "" },
      //     ],
      //   },
    ],
    sidebar: [
      { title: "Fighting!", path: "/home" },
      {
        title: "handTear",
        children: autoGetSidebarOptionBySrcDir(
          path.resolve(__dirname, "../handTear")
        ),
      },
      {
        title: "blog",
        children: autoGetSidebarOptionBySrcDir(
          path.resolve(__dirname, "../blog")
        ),
      },
      {
        title: "linux",
        children: autoGetSidebarOptionBySrcDir(
          path.resolve(__dirname, "../linux")
        ),
      },
    ],
  },
  plugins: [
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功",
        },
      },
    ],
    [
      "dynamic-title",
      {
        showIcon: "https://sixgod.cool/avatar.jpg",
        showText: "客官欢迎回来~",
        hideIcon: "https://sixgod.cool/avatar.jpg",
        hideText: "客官不要走嘛~",
        recoverTime: 2000,
      },
    ],
    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      },
    ],
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    "reading-progress",
    [
      "vuepress-plugin-shortlink",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html",
        containDirs: ["/blog", "/handTear", "/linux"],
      },
    ],
    [
      "vuepress-plugin-right-anchor",
      {
        showDepth: 1,
        ignore: [
          "/",
          "/api/",
          // 更多...
        ],
        expand: {
          trigger: "hover",
          clickModeDefaultOpen: true,
        },
        customClass: "your-customClass",
        disableGlobalUI: false,
      },
    ],
  ],
};
