// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
// Chai assert
const assert = require('chai').assert;

import endsWith from "../src/endsWith.js";

/****** 16.endsWith.js tests *****/

describe("endsWith.js tests", function () {
    describe("Should return a boolean describing, if a given string ends with another given string", function () {
        it("should return true when endsWith('abc', 'c') ", function () {
            assert.deepEqual(endsWith("abc", "c"), true);
        });
        
        it("should return false when endsWith('abc', 'b')", function () {
            assert.deepEqual(endsWith("abc", "b"), false);
        });
        
        it("should return true when endsWith('abc', 'b', 2)", function () {
            assert.deepEqual(endsWith("abc", "b", 2), true);
        });

        it("should return true when given negative position to look for and target is first char", function () {
            assert.deepEqual(endsWith("abc", "a", -99), true);
        });

        it("should return true when given position > string.length to look for and target is last char", function () {
            assert.deepEqual(endsWith("abc", "c", 100), true);
        });
        
        it("should return boolean", function () {
            assert.isBoolean(endsWith());
        });
    });
});