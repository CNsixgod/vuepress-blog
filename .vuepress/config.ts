import { defineUserConfig, Page, viteBundler } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { genSideBar, compatiblePath } from "../.script/auto-sidebar";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
const sidebars = genSideBar(path.resolve(__dirname, "../docs"));

export default defineUserConfig({
  title: "大尾鲈鳗",
  description: "学而不思则黄，思而不学则黄",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "john huang",
    docsRepo: "",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",

    backToTop: true,
    nprogress: true,
    activeHeaderLinks: true,
    // series 为原 sidebar
    series: sidebars,
    navbar: [
      {
        text: "Docs",
        children: [
          { text: "前端基础", link: "/docs/front-end-base/7d5ea1ff" },
          { text: "前端", link: "/docs/front-end/7d73e751" },
          { text: "后端", link: "/docs/back-end/7cbf7510" },
        ],
      },
    ],
  }),
  plugins: [
    {
      name: "vuepress-plugin-code-copy",
      extendsPage(page: Page) {
        const {
          slug,
          filePath,
          permalink,
          dataFileChunkName,
          content,
          frontmatter,
          filePathRelative,
        } = page;
        const includesDir = ["/docs", "/blogs"];

        if (
          !includesDir.some((s) => filePath?.includes(s)) ||
          permalink ||
          !filePath ||
          !filePathRelative
        )
          return;
        const hasDocsPath = filePathRelative?.includes("docs");

        let fixturesPermalink = dataFileChunkName.split("-")[1];
        if (hasDocsPath) {
          const newFilePath = filePathRelative?.split("/") ?? [];
          newFilePath.pop();
          newFilePath.pop();
          fixturesPermalink = compatiblePath(
            path.join(newFilePath.join("/"), fixturesPermalink)
          );
          console.log(fixturesPermalink);
        }

        frontmatter.title = slug;
        frontmatter.date = new Date().toLocaleDateString();
        frontmatter.permalink = `/${fixturesPermalink}.html`;
        let newContent = matter.stringify(content, frontmatter);
        fs.writeFileSync(filePath, newContent, "utf8");
      },
    },
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  // debug: true,
});
