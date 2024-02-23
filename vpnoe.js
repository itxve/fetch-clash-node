const { wf } = require("./utils");

(async () => {
  await fetch("https://vpnoe.com/mfjd.html", {
    headers: {
      Cookie:
        "579e449d7eec66b888e62c8140a39ba6__typecho_remember_mail=1770231%40qq.com",
    },
  }).then(async (res) => {
    const text = await res.text();
    if (res.status === 200) {
      let [_, link] = text.match("Clash： (.*)clash=1");
      link += "clash=1";
      console.log("link:::::", link);
      await fetch(link)
        .then((r) => r.text())
        .then((text) => {
          wf("vpnoe.yaml", text);
        });
    }
  });
})();
