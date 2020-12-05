// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
    // Chai assert
    const assert = require('chai').assert;
    
    import toFinite from "../src/toFinite.js";
    
    /****** 37.toFinite *****/
    
    describe("toFinite.js tests", function () {
        const INFINITY = 1 / 0;
        const MAX_INTEGER = 1.7976931348623157e+308;
        
        describe("Should Convert `value` to a finite number", function () {
            it("Should return a number", function () {
                assert.isNumber(toFinite(3),Number);
            });
            
            it("Should return 5e-324 when input is MIN_VALUE", function () {
                assert.strictEqual(toFinite(Number.MIN_VALUE),5e-324);
            });
            
            it("Should return MAX_INTEGER when input is infinity", function () {
                assert.strictEqual(toFinite(INFINITY),MAX_INTEGER);
            });
            
            it("should return 3.2 when input is 3.2", function () {
                assert.strictEqual(toFinite(3.2),3.2);
            });
            
            it("should return 3.2 when input is '3.2'", function () {
                assert.strictEqual(toFinite("3.2"), 3.2);
            });
        });
    });