// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
    // Chai assert
    const assert = require('chai').assert;
    
    import isBoolean from "../src/isBoolean.js";
    
    /****** 23.isBoolean.js tests *****/
    
    describe("isBoolean.js tests", function () {
        
        describe("Should Return `true` if `value` is a boolean, else `false`", function () {
            it("should return true if `value` is `false` ", function () {
                assert.isTrue(isBoolean(false));
            });
            
            it("should return true if value is true ", function () {
                assert.isTrue(isBoolean(true));
            });
            
            it("Should Return `false` if `value` is `null`", function () {
                assert.isFalse(isBoolean(null));
            });
            
            it("Should Return `false` if `value` is `undefined`", function () {
                assert.isFalse(isBoolean(undefined));
            });
            
            it("Should Return false if `value` is object", function () {
                assert.isFalse(isBoolean({}));
            });
            
            it("Should Return `false` if `value` is string", function () {
                assert.isFalse(isBoolean("true"));
            });
            
            it("Should Return `false` if `value` is number", function () {
                assert.isFalse(isBoolean(0));
            });

            it("should return boolean", function () {
                assert.isBoolean(isBoolean("true"));
                assert.isBoolean(isBoolean(false));
            });
        });
    });
