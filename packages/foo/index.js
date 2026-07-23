// Component FOO. Contains a deliberate ReDoS so GitHub code scanning (CodeQL)
// raises a code-scanning alert whose location.path is packages/foo/index.js.
function trimFoo(text) {
  // BAD: polynomial-time regex on uncontrolled input (js/polynomial-redos)
  return text.replace(/^\s+|\s+$/g, "");
}

module.exports = { trimFoo };
