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
