// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
    // Chai assert
    const assert = require('chai').assert;
    
    import toInteger from "../src/toInteger.js";
    
    /****** 38.toInteger *****/
    
    describe("toInteger.js tests", function () {
        const expectedResult = 3;
        
        describe("Should return integer", function () {
            it("Input is a number", function () {
                assert.isNumber(toInteger(3),Number);
            });
            
            it("Should return 0 when input is MAX_SAFE_INTEGER", function () {
                assert.strictEqual(toInteger(Number.MAX_SAFE_INTEGER),0);
            });
            
            it("Should return 3 when input is 3.2", function () {
                assert.strictEqual(toInteger(3.2),expectedResult);
            });
            
            it("Should return 1.7976931348623157e+308 when input is infinity ", function () {
                const ExpectedResult = 1.7976931348623157e+308;
                assert.strictEqual(toInteger(Infinity),ExpectedResult);
            });
            
            it("Should return finite value", function () {
                assert.isFinite(toInteger(3.2),expectedResult);
            });
        });
    });