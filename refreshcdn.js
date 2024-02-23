(async () => {
  const host = "https://purge.jsdelivr.net/gh/itxve/fetch-clash-node/node/";

  await Promise.all(
    [
      "ClashNode.yaml",
      "NodeFree.yaml",
      "NodeBird.yaml",
      "NodeShare.yaml",
      "vpnoe.yaml",
    ].map((node) => {
      fetch(host + node).then(async (res) => {
        if (res.status === 200) {
          console.log(node, ":ok", await res.text());
        }
      });
    })
  );
})();
