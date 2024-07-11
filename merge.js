const { rf, wf } = require("./utils");

const urls = [
  "https://raw.githubusercontent.com/itxve/fetch-clash-node/main/node/ClashNode.yaml",
  // "https://raw.githubusercontent.com/itxve/fetch-clash-node/main/node/NodeFree.yaml",
  "https://raw.githubusercontent.com/itxve/fetch-clash-node/main/node/NodeBird.yaml",
  "https://raw.githubusercontent.com/itxve/fetch-clash-node/main/node/NodeShare.yaml",
].join("|");
const subscriptUrl = `https://id9.cc/sub?target=clash&url=${encodeURIComponent(
  urls
)}&insert=false`;

console.log(subscriptUrl);

(async () => {
  const res = await fetch(subscriptUrl, {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "zh-CN,zh;q=0.9,ga;q=0.8",
      "cache-control": "max-age=0",
      priority: "u=0, i",
      "sec-ch-ua":
        '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
  }).then((res) => res.text());
  if (res) {
    wf(`merge.yaml`, res);
  }
})();
