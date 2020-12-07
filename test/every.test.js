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
                assert.isTrue(every(testData1, Number));
            });
            
            it("should return true when  every([true, false, false],Boolean)", function () {
                const testData2 = [true, false, false];
                assert.isTrue(every(testData2, Boolean));
            });
            
            it("should return false when every([true, 1],Boolean)", function () {
                const testData3 = [true, 0, 1];
                assert.isFalse(every(testData3, Boolean));
            });
            
            it("should return boolean", function () {
                assert.isBoolean(every([], Number));
            });
        });
    });