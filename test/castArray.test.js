// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import castArray from "../src/castArray.js";

/****** 5. castArray.js tests *****/
describe("castArray.js tests", function() {
  describe("Should return values in an array", function() {
    it("should return an array when given value is nothing", function() {
      assert.typeOf(castArray(), "array");
    });
    
    it("should return [1] when test data is 1", function() {
      assert.deepEqual([1], castArray(1));
    });
    
    it("should return [{ 'a': 1 }] when test data is { 'a': 1 }", function() {
      assert.deepEqual([{ 'a': 1 }], castArray({ 'a': 1 }));
    });
    
    it("should return ['abc'] when test data is 'abc'", function() {
      assert.deepEqual(['abc'], castArray('abc'));
    });
    
    it("should return itself when given an array", function() {
      const arr = ["abba", "jabba", "doo"];
      
      assert.strictEqual(arr, castArray(arr));
    });
    
    it("return value is an array ", function() {
      
      assert.isArray(castArray([]), Array);
    });
  });
});
