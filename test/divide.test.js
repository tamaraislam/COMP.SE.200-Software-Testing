// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
    // Chai assert
    const assert = require('chai').assert;
    
    import divide from "../src/divide.js";
    
    /****** 14.divide.js tests *****/
    
    describe("divide.js tests", function () {
        
        describe("Dividend should be divided by Divisor and should return Quotient(Output)", function () {
            it("should return 2.4 when 12 is divided by 5", function () {
                const expectedResult = 2.4;
                assert.strictEqual(divide(12,5), expectedResult);
            });
            
            it("should return 1.5 when 6 is divided by 4", function () {
                const ExpectedResult = 1.5;
                assert.strictEqual(divide(6,4), ExpectedResult);
            });
            
            it("should return 0.5 when 6 is divided by 12", function () {
                const expectedOutput = 0.5;
                assert.strictEqual(divide(6,12), expectedOutput)
            });
            
            it("should return 1 when 6 is divided by 6", function () {
                const expectedOutput2 = 1;
                assert.strictEqual(divide(6,6), expectedOutput2)
            });
            
            it("should return 6 when 12 is divided by 2", function () {
                const expectedOutput3 = 6;
                assert.strictEqual(divide(12,2), expectedOutput3)
            });
            
            it("should return a number ", function () {
                assert.isNumber(divide(), Number);
            });
        });
    });