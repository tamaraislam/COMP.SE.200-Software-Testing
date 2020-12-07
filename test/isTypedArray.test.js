// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import isTypedArray from "../src/isTypedArray.js";

describe("isTypedArray.js tests", function() {
  describe("Should return a boolean", function() {
    it("is a typed array", function () {
      assert.isBoolean(isTypedArray(new Uint8Array()));
    });

    it("isn't a typed array", function () {
      assert.isBoolean(isTypedArray([]));  
    });
  });

  describe("Should return false when not given a typed array", function () {
    it("Array", function() {
      assert.isFalse(isTypedArray([]));
    });
    it("String", function() {
      assert.isFalse(isTypedArray("Uint8Array"));
    });
    it("Object", function() {
      assert.isFalse(isTypedArray({"array": true}));
    });
  });

  describe("Should return true when given a typed array", function() {
    it("Uint8array", function() {
      assert.isTrue(isTypedArray(new Uint8Array()));
    });
    it("BigUIntArray with values", function() {
      let arr = new BigUint64Array();
      arr[0] = BigInt(0);
      arr[1] = BigInt(2);
      arr[2] = BigInt(Number.MAX_SAFE_INTEGER);

      assert.isTrue(isTypedArray(arr));
    });

    it("Float32Array", function() {
      assert.isTrue(isTypedArray(new Float32Array()));
    });
  });
});