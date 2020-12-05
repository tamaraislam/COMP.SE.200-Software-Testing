// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import isBuffer from "../src/isBuffer.js";

describe("isBuffer.js tests", function() {
  it("Should return true when given value is a buffer", function() {
    assert.isTrue(isBuffer(new Buffer("1")));
  });

  it("Should return false when given value is not a buffer", function() {
    assert.isFalse(isBuffer(new String("abba")));
  });
});