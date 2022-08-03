const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");

const compatiblePath = (p) => {
  if (!p || typeof p !== "string") return p;

  const sep = path.sep;

  if (sep === "/") return p;

  return p.replace(/\\/g, "/");
};

const replacePath = path.resolve(__dirname, "..");
const genSideBar = (RootPath) => {
  let sidebars = {};
  const dfs = (p, l = ["", 0]) => {
    if (!p || p.includes("blogs")) return;
    const fixturesPath = compatiblePath(p);
    const [parentKey, level] = l;
    const dirName = compatiblePath(p.replace(replacePath, ""));
    if (!!level) {
      if (level === 1) {
        sidebars[dirName] = [];
      }

      if (level === 2) {
        sidebars[parentKey].push({
          text: dirName
            .replace(parentKey, "")
            .replace("/", "")
            .replace("-", "")
            .replace(/[0-9]+/g, ""),
          children: [],
        });
      }

      if (level === 3 && fs.statSync(p).isFile()) {
        const permalink = matter(
          fs.readFileSync(fixturesPath)
        ).data?.permalink?.replace(".html", "");
        // if (!permalink) return;
        const titleName = parentKey.split("/").pop();
        const parentKeySplit = parentKey.split("/");
        parentKeySplit.pop();
        const key = parentKeySplit.join("/");
        sidebars[key]?.forEach((item) => {
          if (
            item?.text === titleName.replace("-", "").replace(/[0-9]+/g, "")
          ) {
            item.children.push(permalink);
          }
        });
      }
    }

    if (fs.statSync(p).isFile()) return;

    const dirs = fs.readdirSync(p);

    dirs.forEach((dir) => {
      const dirPath = path.resolve(fixturesPath, dir);
      dfs(dirPath, [dirName, level + 1]);
    });
  };

  dfs(RootPath);

  return sidebars;
};

module.exports = { genSideBar, compatiblePath };
