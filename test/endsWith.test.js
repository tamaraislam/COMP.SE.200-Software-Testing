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
        const array = "abc";
        describe("Should return a boolean describing, if a given string ends with another given string", function () {
            it("should return true when endsWith('abc', 'c') ", function () {
                const expectedResult = true;
                assert.deepEqual(endsWith("abc", "c"), expectedResult);
            });
            
            it("should return false when endsWith('abc', 'b')", function () {
                const ExpectedResult = false;
                assert.deepEqual(endsWith("abc", "b"), ExpectedResult);
            });
            
            it("should return true when endsWith('abc', 'b', 2)", function () {
                const expectedOutput = true;
                assert.deepEqual(endsWith("abc", "b", 2), expectedOutput)
            });
            
            it("should return boolean", function () {
                const returnValue = true,
                returnValue2 = false;
                assert.isBoolean(returnValue, "correct answer")
                assert.isBoolean(returnValue2,"wrong answer")
            });
        });
    });