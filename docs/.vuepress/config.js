const autoGetSidebarOptionBySrcDir = require("./vendor/sidebar-auto");
const { sideBarTool } = require("./vendor/test");
const path = require("path");

// 需要排除的一些目录
let unDirIncludes = [".vuepress", "static"];
// 只需要处理后缀的文件类型
let SuffixIncludes = ["md", "html"];
//使用方法生生成侧边栏
// 侧边栏
let sidebar = sideBarTool.genSideBarGroup(
  path.resolve(__dirname, "../"),
  unDirIncludes,
  SuffixIncludes,
  {}
);

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
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
    ],
    sidebar,
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认文案 “标签”
      },
    },
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
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    "reading-progress",
    [
      "vuepress-plugin-shortlink",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html",
        containDirs: [
          "/blog",
          "/handTear",
          "/linux",
          "/draft",
          "/electron",
          "/react",
        ],
      },
    ],
    [
      "vuepress-plugin-right-anchor",
      {
        showDepth: 3,
        ignore: [
          "/",
          "/api/",
          // 更多...
        ],
        expand: {
          trigger: "hover",
          clickModeDefaultOpen: true,
        },
        disableGlobalUI: false,
      },
    ],
  ],
};
