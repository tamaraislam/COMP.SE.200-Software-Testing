// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
    // Chai assert
    const assert = require('chai').assert;
    
    import toNumber from "../src/toNumber.js";
    
    /****** 39.toNumber *****/
    
    describe("toNumber.js tests", function () {
        const expectedResult = 3;
        
        describe("Should return integer", function () {
            it("Input is a number", function () {
                assert.isNumber(toNumber(3),Number);
            });
            
            it("Should return 5e-324 when input is MIN_VALUE", function () {
                assert.strictEqual(toNumber(Number.MIN_VALUE),5e-324);
            });
            
            it("Should Check input is a finite number", function () {
                assert.isFinite(toNumber(9999999999),Number.Finite);
            });
            
            it("Should Check input is a NaN", function () {
                assert.isNaN(toNumber(NaN),NaN);
            });
            
            it("should return 3.2 when input is 3.2", function () {
                assert.strictEqual(toNumber(3.2),3.2);
            });
            
            it("should return 3.2 when input is '3.2'", function () {
                assert.strictEqual(toNumber("3.2"), 3.2);
            });
        });
    });