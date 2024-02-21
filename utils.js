const fs = require("fs");
const path = require("path");
function zore(t) {
  return t >= 10 ? `${t}` : `0${t}`;
}
function rf(name) {
  return fs.readFileSync(path.join(__dirname, "node", name)).toString();
}
function wf(name, data) {
  fs.writeFileSync(path.join(__dirname, "node", name), data);
}
function readme() {
  return fs.readFileSync(path.join(__dirname, "README.md")).toString();
}
function wreadme(data) {
  return fs.writeFileSync(path.join(__dirname, "README.md"), data);
}

module.exports = { rf, zore, wf, readme, wreadme };
