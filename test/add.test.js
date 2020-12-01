// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import add from "../src/add.js";

/***** 1.  add.js tests *****/
describe("add.js tests", function() {
    it("should return 2 when 1+1 are added", function() {
      assert.equal(2, add(1, 1));
    });
  
    it("should return 1 when 0 and 1 are added", function() {
      assert.equal(1, add(0, 1));
    });
  
    it("should return max integer + 1", function() {
      assert.equal(Number.MAX_SAFE_INTEGER + 1, add(Number.MAX_SAFE_INTEGER, 1));
    });
  });