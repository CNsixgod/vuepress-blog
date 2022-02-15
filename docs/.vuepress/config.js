module.exports = {
  title: "john-jojo",
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
      {
        title: "handTear",
        collapsable: true, // 不折叠
        children: [
          {
            title: "用setTimeout模拟setInterval",
            path: "/handTear/用setTimeout模拟setInterval",
          },
        ],
      },
    ],
  },
};
