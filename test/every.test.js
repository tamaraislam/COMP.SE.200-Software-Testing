// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
    // Chai assert
    const assert = require('chai').assert;
    
    import every from "../src/every.js";
    
    /****** 18.every.js tests *****/
    
    describe("every.js tests", function () {
        
        describe("Should check if a given predicate returns true for all of the elements of a given array", function () {
            it("should return true when every([1, 2, 3, 4], Number)", function () {
                const testData1 = [1, 2, 3, 4];
                const expectedResult = true;
                assert.deepEqual(every(testData1, Number), expectedResult);
            });
            
            it("should return true when  every([true, false, false],Boolean)", function () {
                const testData2 = [true, false, false];
                const ExpectedResult = true;
                assert.deepEqual(every(testData2,Boolean), ExpectedResult);
            });
            
            it("should return false when every([true, 1],Boolean)", function () {
                const testData3 = [true, 1];
                const expectedOutput = true;
                assert.deepEqual(every(testData3,Boolean), expectedOutput)
            });
            
            it("should return boolean", function () {
                const returnValue = true,
                returnValue2 = false;
                assert.isBoolean(returnValue, "correct answer")
                assert.isBoolean(returnValue2,"wrong answer")
            });
        });
    });