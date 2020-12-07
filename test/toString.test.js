// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import toString from "../src/toString.js";

describe("toString.js tests", function() {
  it("Should always return a string", function() {
    assert.isString(toString(null));
    assert.isString(toString(undefined));
  });

  it("Should return empty string from null values", function() {
    assert.equal(toString(null), "");
  });

  it("Should return array values as a string", function() {
    assert.strictEqual(toString([1, 2, 3, 4]), "1,2,3,4");
  });

  it("Should return string with commas only from null array values", function() {
    assert.strictEqual(toString([null, undefined, null]), ",,");
  });

  it("Should return number as a string, preserving sign of -0", function() {
    assert.strictEqual(toString(Number(-0)), "-0");
  });

  it("Should return max safe integer as a string", function() {
    const maxSafeIntString = Number.MAX_SAFE_INTEGER.toString();
    assert.strictEqual(toString(Number.MAX_SAFE_INTEGER), maxSafeIntString);
  });

  it("Should return string from symbol", function() {
    assert.strictEqual(toString(Symbol("abba")), "Symbol(abba)");
  });

  it("Should return same string from string", function() {
    const abba = "abba";
    assert.strictEqual(toString(abba), abba);
  });
});