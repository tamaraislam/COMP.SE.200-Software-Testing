// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import memoize from "../src/memoize.js";

// TODO: Make the tests more comprehensive
describe("memoize.js tests", function() {
  const obj = { 'a': 1, 'b': 2 };

  it("Should memoize the given object values", function() {
    const mem = memoize(value => value);

    const memoizedObj = mem(obj);

    assert.deepEqual(obj, memoizedObj);

    obj.a = 3;
    const memoizedObjNew = mem(obj);
    assert.deepEqual(memoizedObj, memoizedObjNew);
  });

  it("Should throw a TypeError when not given a function", function() {
    assert.throws(memoize(obj), TypeError);
  });
});