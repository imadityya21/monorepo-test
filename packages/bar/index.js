// Component BAR. Contains a deliberate ReDoS so GitHub code scanning (CodeQL)
// raises a code-scanning alert whose location.path is packages/bar/index.js.
function parseBarNumber(str) {
  // BAD: polynomial-time regex on uncontrolled input (js/polynomial-redos)
  return /^0\.\d+E?\d+$/.test(str);
}

module.exports = { parseBarNumber };
