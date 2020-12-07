// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import slice from "../src/slice.js";

describe("slice.js tests", function() {
  describe("Creates a slice of `array` from `start` up to, but not including, `end`.", function() {
    const origArr = [1, 2, 3, 4];
    const arr = origArr;

    it("Should return an empty array when given empty array", function() {
      const returnArr = slice([]);

      assert.isEmpty(returnArr);
      assert.isArray(returnArr);
    });

    it("Should not slice any values when start and end pos the same", function() {
      assert.deepEqual(slice(arr, 3, 3), origArr);
    });

    it("Should return a new array, not slice the original", function() {
      const expectedArr = [3, 4];

      assert.deepEqual(slice(arr, 2), expectedArr);
      assert.deepEqual(origArr, arr);
    });

    it("Should treat negative index as an offset", function() {
      const expectedArr = [1, 2];

      assert.deepEqual(slice(arr, -1, -3), expectedArr);
    });
  });
});