// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import isObject from "../src/isObject.js";

describe("isObject.js tests", function() {
  it("Should return a boolean", function() {
    // Return true
    assert.isBoolean(isObject({}));
    // return false
    assert.isBoolean(isObject(null));
  });

  describe("should return true when value is an object", function() {
    it("object", function() {
      assert.isTrue(isObject({}));
    });

    it("array", function() {
      assert.isTrue(isObject([]));
    });

    it("function", function() {
      assert.isTrue(isObject(function() { }));
    });

    it("new Number", function() {
      assert.isTrue(isObject(new Number(0)));
    });

    it("new String", function() {
      assert.isTrue(isObject(new String("")));
    });
  });

  describe("Should return false when value is not an object", function() {
    it("number", function() {
      assert.isFalse((isObject(0)));
    });

    it("null", function() {
      assert.isFalse(isObject(null));
    });

    it("undefined", function() {
      assert.isFalse(isObject(undefined));
    });
  });
});