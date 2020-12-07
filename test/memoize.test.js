// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import memoize from "../src/memoize.js";

// TODO: Make the tests more comprehensive
describe("memoize.js tests", function() {
  it("Should memoize the given object values", function() {
    let obj = { 'a': 1, 'b': 2 }

    const mem = memoize;

    let memoizedObj = mem(obj);

    assert.deepEqual(obj, memoizedObj);

    obj.a = 3;
    let memoizedObjNew = mem(obj);
    assert.deepEqual(memoizedObj, memoizedObjNew);
  });
});