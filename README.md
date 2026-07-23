# monorepo-ops36-test

A throwaway monorepo to validate **OPS-36** — scoping GitHub code issues to the
subfolder/component they affect instead of bubbling every alert to every
component linked to the repo.

## Layout

```
packages/
  foo/   -> Component FOO   (linked in OpsLevel at subfolder "packages/foo")
    package.json  (ip@2.0.0        -> Dependabot alert, manifest_path packages/foo/package.json)
    index.js      (ReDoS           -> code-scanning alert, location.path packages/foo/index.js)
  bar/   -> Component BAR   (linked in OpsLevel at subfolder "packages/bar")
    package.json  (lodash@4.17.20  -> Dependabot alert, manifest_path packages/bar/package.json)
    index.js      (ReDoS           -> code-scanning alert, location.path packages/bar/index.js)
```

## Expected result after the OPS-36 fix

- **Component FOO** shows only the `packages/foo/*` alerts.
- **Component BAR** shows only the `packages/bar/*` alerts.
- Before the fix, both components showed all four alerts.

The vulnerable dependencies and ReDoS patterns are intentional — this repo
exists solely to generate real GitHub security alerts for the test.
