// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import map from "../src/map.js";

describe("map.js tests", function() {

  // test function adding one
  const plusOne = function(val) {
    return ++val;
  }
  // test function dividing by two
  const divideByTwo = function(val) {
    return val / 2;
  }
  // adds the second value to the first
  const add = function(first, second) {
    return first + second;
  }

  it("Should iterate through each value of the array, running the given function adding one to values", function() {
    const originalArr = [1, 2, 3, 4];
    const desiredArr = [2, 3, 4, 5];

    const returnVal = map(originalArr, plusOne);

    assert.deepEqual(returnVal, desiredArr);
  });

  it("Should divide values of array by two per the given function", function() {
    const originalArr = [0, 2, 4, 6];
    const desiredArr = [0, 1, 2, 3];

    const returnVal = map(originalArr, divideByTwo);

    assert.deepEqual(returnVal, desiredArr);
  });

  it("Should add index of each value to itself", function() {
    const originalArr = [0, -1, -2];
    const desiredArr = [0, 0, 0];

    const returnVal = map(originalArr, add);

    assert.deepEqual(returnVal, desiredArr);
  });

  it("Handling of empty arrays", function() {
    assert.isEmpty(map([], plusOne));
  });
});