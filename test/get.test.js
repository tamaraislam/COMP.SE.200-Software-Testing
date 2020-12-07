// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import get from "../src/get.js";

describe("get.js tests", function() {
  // Test values
  const object = { "abba": [1, {"f": 3}] };
  const origObject = object;

  describe("Should return the chosen for values from an object { \"abba\": [1, {\"f\": 3}] }", function() {
    it("should return 1 when asked for abba[0]", function() {
     assert.strictEqual(get(object, "abba[0]"), 1);
    });

    it(`Should return 3 when param path is ["abba", "1", "f"]`, function() {
      assert.strictEqual(get(object, ["abba", "1", "f"]), 1);
    });

    it(`Should return defaultVal 0 when given undefined path`, function() {
      assert.strictEqual(eq(object, "jaba.daba.doo", 0), 0);
    });

    it(`Should return defaultVal 1 when given undefined path`, function() {
      assert.strictEqual(eq(object, "jaba.daba.doo", 1), 1);
    });

    it(`Should return defaultVal "returnMe" when given undefined path`, function() {
      assert.strictEqual(eq(object, "jaba.daba.doo", "returnMe"), "returnMe");
    });

    it("Should not modify the original object", function() {
      assert.strictEqual(object, origObject);
    });
  });
});