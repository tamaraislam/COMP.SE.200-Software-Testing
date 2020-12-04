// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

/**** Imports for all the different javascript modules *****/

import at from "../src/at.js";

/****** 2. at.js tests *****/
describe("at.js tests", function(){
  it("should return array with string", function() {
    const testObject = { "hello": "world" };
    const testPath = "hello";
    
    const returnValue = at(testObject, testPath);
    
    assert.typeOf(returnValue, "array", "return value is an array");
    
    assert.deepEqual(returnValue, ["world"]);
  });
  
  it("should return an array with picked values", function() {
    const testObject = { 'a': [{ 'b': { 'c': 3 } }, 4, 2] };
    
    assert.deepEqual(at(testObject, ["a[0]", "a[2]"]), [{ 'b': { 'c': 3 } }, 2]);
  });

  it("return value is an array", function() {
    assert.isArray(at([]), Array);
  });
});