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
                assert.strictEqual(isLength(3),true);
            });
            
            it("Should return true  if `value` is  Max-safe-integer ", function () {
                const MAX_SAFE_INTEGER = 9007199254740991;
                assert.strictEqual(isLength(Number.MAX_SAFE_INTEGER),true);
            });
            
            it("Should return false if `value` is infinity", function () {
                assert.strictEqual(isLength(Infinity),false);
            });
            
            it("Should return false if `value` is '3'", function () {
                assert.strictEqual(isLength("3"),false);
            });
            
            it("Should return false if `value` is -1", function () {
                assert.strictEqual(isLength(-1),false);
            });

            it("should return boolean", function () {
                assert.isBoolean(isLength(-1)); 
                assert.isBoolean(isLength());    
            });
        });
    });
