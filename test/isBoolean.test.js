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
                assert.isBoolean(isBoolean(false),true);
            });
            
            it("Should Return `false` if `value` is `null`", function () {
                assert.isBoolean(isBoolean(null),false);
            });
            
            it("Should Return `false` if `value` is string", function () {
                assert.isBoolean(isBoolean("true"),false);
            });
        });
    });