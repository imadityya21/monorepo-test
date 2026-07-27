// Component BAR. Contains deliberate vulnerabilities so GitHub code scanning
// (CodeQL) raises code-scanning alerts whose location.path is packages/bar/index.js.

function parseBarNumber(str) {
  // BAD: polynomial-time regex on uncontrolled input (js/polynomial-redos)
  return /^0\.\d+E?\d+$/.test(str);
}

function runBar(userInput) {
  // BAD: code injection via eval on untrusted input (js/code-injection)
  return eval(userInput);
}

function matchBar(userPattern, text) {
  // BAD: regular expression built from untrusted input (js/regex-injection)
  return new RegExp(userPattern).test(text);
}

module.exports = { parseBarNumber, runBar, matchBar };
