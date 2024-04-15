const { wf } = require("./utils");

(async () => {
  await fetch("https://vpnoe.com/mfjd.html", {
    headers: {
      Cookie: `579e449d7eec66b888e62c8140a39ba6__typecho_remember_author=iiitre; 579e449d7eec66b888e62c8140a39ba6__typecho_remember_mail=gawe%40gmail.com`,
    },
  }).then(async (res) => {
    const text = await res.text();
    if (res.status === 200) {
      let [_, link] = text.match("Clash订阅地址：(.*)\\<\\/code");
      console.log("link:", link);
      // link += "clash=1";
      console.log("link:::::", link);
      await fetch(link)
        .then((r) => r.text())
        .then((text) => {
          if (text) {
            wf("vpnoe.yaml", text);
          }
        });
    }
  });
})();
