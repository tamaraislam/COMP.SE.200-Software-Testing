// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import countBy from "../src/countBy.js";

/*
 * CountBy tests 
 */
describe("CountBy tests", function () {
  const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'barney', 'active': false },
    { 'user': 'barney', 'active': true }
  ];

  it("Should return composed key values of given array of objects", function() {
    assert.deepEqual(countBy(users, value => value.active), { 'true': 3, 'false': 2 });
  });

  it("Should return composed key values of given array of objects", function() {
    assert.deepEqual(countBy(users, value => value.user), { 'barney': 3, 'fred': 1, 'betty': 1 });
  });

  it("Should return composed key value of given object", function() {
    const user = { 'user': 'barney', 'active': true };

    assert.deepEqual(countBy(user, value => value.active), { 'true': 1 });
  });

  it("Should return an object", function() {
    assert.isObject(countBy(users, value => value));
  });
});