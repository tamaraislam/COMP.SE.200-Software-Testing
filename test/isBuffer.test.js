// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import isBuffer from "../src/isBuffer.js";

describe("isBuffer.js tests", function() {
  describe("Should return true when given value is a buffer", function() {
    it("Should return true when given value is a buffer", function() {
      assert.isTrue(isBuffer(new Buffer(1)));
    });
  }); 

  describe("Should return false when given value is not a buffer", function() {
    it("new String", function() {
      assert.isFalse(isBuffer(new String("abba")));
    });

    it("string", function() {
      assert.isFalse(isBuffer("buffer"));
    });

    it("[]", function() {
      assert.isFalse(isBuffer([]));
    });

    it("new Uint8Array([1, 2, 3])", function() {
      assert.isFalse(isBuffer(new Uint8Array([1, 2, 3])));
    });

    it("new Uint8Array()", function() {
      assert.isFalse(isBuffer(new Uint8Array()));
    });

    it("new BigUint64Array()", function() {
      assert.isFalse(isBuffer(new BigUint64Array()));
    });

    it("object", function() {
      assert.isFalse(isBuffer({"abba": "kabba"}));
    });
  });
});
