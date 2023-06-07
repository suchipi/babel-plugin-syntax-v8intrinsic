import { test, expect } from "vitest";
import * as babel from "@babel/core";
import path from "path";

test("@suchipi/babel-plugin-syntax-v8intrinsic", () => {
  const code = `%OptimizeFunctionOnNextCall(fn);`;

  expect(() => {
    babel.transformSync(code, {});
  }).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unexpected token (1:0)

    > 1 | %OptimizeFunctionOnNextCall(fn);
        | ^"
  `);

  expect(() => {
    babel.transformSync(code, {
      plugins: [path.join(__dirname, "index.js")],
    });
  }).not.toThrowError();

  const result = babel.transformSync(code, {
    plugins: [path.join(__dirname, "index.js")],
  });

  expect(result.code).toBe(code);
});
