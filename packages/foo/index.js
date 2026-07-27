// Component FOO. Contains deliberate vulnerabilities so GitHub code scanning
// (CodeQL) raises code-scanning alerts whose location.path is packages/foo/index.js.

function trimFoo(text) {
  // BAD: polynomial-time regex on uncontrolled input (js/polynomial-redos)
  return text.replace(/^\s+|\s+$/g, "");
}

function runFoo(userInput) {
  // BAD: code injection via eval on untrusted input (js/code-injection)
  return eval(userInput);
}

function matchFoo(userPattern, text) {
  // BAD: regular expression built from untrusted input (js/regex-injection)
  return new RegExp(userPattern).test(text);
}

module.exports = { trimFoo, runFoo, matchFoo };
