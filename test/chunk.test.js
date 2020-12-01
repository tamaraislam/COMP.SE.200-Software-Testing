// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import chunk from "../src/chunk.js";

/****** 5. castArray.js tests *****/
describe("chunk.js tests", function() {
  describe("Should splits an Array into given-size chunks", function() {
    it("should return a null array when given size value is less than 1", function() {
        const array = [];
        assert.equal(array,chunk());
    });

    it("should return [['a', 'b'], ['c', 'd']] when test data is chunk(['a', 'b', 'c', 'd'], 2)", function() {
      assert.equal([['a', 'b'], ['c', 'd']], chunk(['a', 'b', 'c', 'd']));
    });

    it("should return [['a', 'b', 'c'], ['d']] when test data is  chunk(['a', 'b', 'c', 'd'], 3)", function() {
      assert.equal([['a', 'b', 'c'], ['d']], chunk(['a', 'b', 'c', 'd']));
    });

    });
  });

