// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// Chai assert
const assert = require('chai').assert;

import difference from "../src/difference.js";

/****** 13. difference.js tests *****/
describe("difference.js tests", function() {
    describe("Should an array with values where the second Array’s values will be excluded from the return value", function() {

        it("should return [1, 2] when first array:[1, 2, 3, 4] & second array:[3, 4]", function() {
            const ExpectedResult = [1, 2]; 
            assert.deepEqual(difference([1, 2, 3, 4],[3, 4]),ExpectedResult);
        });
        
        it("should return an empty array if both arrays are empty", function() {
            const array = [];
            assert.deepEqual(difference(array),array);
        });
        
        it("should return [“abba”] when first array:[“hello”, “world”, “abba”] & second array:[“hello”, “world”]", function() {
            const ExpectedOutput = ["abba"];
            assert.deepEqual(difference(["hello", "world", "abba"],["hello", "world"]),ExpectedOutput);
        });
        
    });
});

