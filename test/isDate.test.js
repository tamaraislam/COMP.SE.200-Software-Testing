// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
    // Chai assert
    const assert = require('chai').assert;
    
    import isDate from "../src/isDate.js";
    
    /****** 25.isDate.js tests *****/
    
    describe("isDate.js tests", function () {
        
        describe("Should return `true` if `value` is a date object, else `false`", function () {
            it("should return true if `value` is `false` ", function () {
                assert.strictEqual(isDate(new Date),true);
            });
            
            it("Should Return `false` if `value` is an old date", function () {
                assert.strictEqual(isDate("Mon April 23 2012"),false);
            });

            it("should return boolean", function () {
                const returnValue = true,
                returnValue2 = false;
                assert.isBoolean(returnValue, "correct answer")
                assert.isBoolean(returnValue2,"wrong answer")
            });
        });
    });