// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
    // Chai assert
    const assert = require('chai').assert;
    
    import isLength from "../src/isLength.js";
    
    /****** 26.isLength.js tests *****/
    
    describe("isLength.js tests", function () {
        
        describe("Should return `true` if `value` is a valid length, else `false`", function () {
            it("should return true if `value` is 3", function () {
                assert.isTrue(isLength(3));
            });
            
            it("Should return true  if `value` is  Max-safe-integer ", function () {
                assert.isTrue(isLength(Number.MAX_SAFE_INTEGER));
            });
            
            it("Should return false if `value` is infinity", function () {
                assert.isFalse(isLength(Number.POSITIVE_INFINITY));
            });
            
            it("Should return false if `value` is '3'", function () {
                assert.isFalse(isLength("3"));
            });
            
            it("Should return false if `value` is -1", function () {
                assert.isFalse(isLength(-1));
            });

            it("should return boolean", function () {
                assert.isBoolean(isLength(-1)); 
                assert.isBoolean(isLength());
            });
        });
    });