const { wf } = require("./utils");

async function genCookie() {
  const res = await fetch(
    "https://vpnoe.com/mfjd.html/comment?time=" + Date.now(),
    {
      headers: {
        accept: "text/plain, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9,ga;q=0.8",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        Referer: "https://vpnoe.com/mfjd.html",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
      body:
        "author=luqwe&mail=luqwe%40qq.com&text=thanks&url=&_=" +
        (function () {
          var _Y1LG = "88aq7dabddc859Nw554e0088d7e52e446663",
            _WHVREa = [
              [2, 4],
              [12, 14],
            ];

          for (var i = 0; i < _WHVREa.length; i++) {
            _Y1LG =
              _Y1LG.substring(0, _WHVREa[i][0]) +
              _Y1LG.substring(_WHVREa[i][1]);
          }
          return _Y1LG;
        })(),
      method: "POST",
      mode: "cors",
      redirect: "manual",
    }
  );
  const ck = res.headers.get("set-cookie");
  if (ck) {
    const rt = ck.match(/([a-z0-9]+)__typecho_remember_author/);
    const [_, token] = rt;
    const author = token + "__typecho_remember_author=luqwe";
    const mail = token + "__typecho_remember_mail=luqwe%40qq.com";
    return `${author} ;${mail};`;
  } else {
    return `579e449d7eec66b888e62c8140a39ba6__typecho_remember_author=iiitre; 579e449d7eec66b888e62c8140a39ba6__typecho_remember_mail=gawe%40gmail.com`;
  }
}

(async () => {
  await fetch("https://vpnoe.com/mfjd.html", {
    headers: {
      Cookie: await genCookie(),
    },
  }).then(async (res) => {
    const text = await res.text();
    if (res.status === 200) {
      let [_, link] = text.match(
        '\\<code class="lang-java">https://(.*)\\<\\/code'
      );
      console.log("link:", "https://" + link);

      await fetch(
        `https://api.subcsub.com/sub?target=clash&url=${encodeURIComponent(
          "https://" + link
        )}&insert=false`
      )
        .then((r) => r.text())
        .then((text) => {
          if (text) {
            wf("vpnoe.yaml", text);
          }
        });
    }
  });
})();
