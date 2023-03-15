// 未使用的脚本
const YAML = require("yaml");
const fs = require("fs");
const path = require("path");

try {
  const doc = YAML.parse(
    fs
      .readFileSync(path.join(__dirname, "node", "ClashNode.yaml"), "utf-8")
      // 过滤不支持的标签
      .replace("!<str>", "")
  );
  doc["proxies"] = [].concat(doc["proxies"]).filter((it) => it.port == 11023);

  fs.writeFileSync(
    path.join(__dirname, "node", "ClashNode2.yaml"),
    YAML.stringify(doc)
  );
} catch (e) {
  console.log(e);
}
