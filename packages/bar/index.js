// Component BAR. Deliberately vulnerable so GitHub code scanning (CodeQL) raises
// code-scanning alerts whose location.path is packages/bar/index.js. The eval/RegExp
// sinks are fed from an HTTP request (a CodeQL RemoteFlowSource) so the taint-tracking
// queries (js/code-injection, js/regex-injection) actually fire.
const http = require("http");
const url = require("url");

function parseBarNumber(str) {
  // js/polynomial-redos: bad regex regardless of input source
  return /^0\.\d+E?\d+$/.test(str);
}

const serverBar = http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  // js/code-injection: untrusted request data flows into eval
  const result = eval(q.expr);
  // js/regex-injection: untrusted request data builds a RegExp
  const matched = new RegExp(q.rx).test(String(q.input));
  res.end(String(result) + String(matched));
});

module.exports = { parseBarNumber, serverBar };
