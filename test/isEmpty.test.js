// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
    // Chai assert
    const assert = require('chai').assert;
    
    import isEmpty from "../src/isEmpty.js";
    
    /****** 26.isEmpty.js tests *****/
    
    describe("isEmpty.js tests", function () {
        
        describe("Should return `true` if `value` is empty, else `false`", function () {
            it("should return true if `value` is an empty array", function () {
                assert.equal(isEmpty([]),true);
            });

            it("Should return true  if `value` is an empty string", function () {
                assert.equal(isEmpty(''),true);
            });

            it("Should return true  if `value` is null", function () {
                assert.equal(isEmpty(null),true);
            });

            it("Should return false if `value` is not empty", function () {
                const val = "abba";
                assert.equal(isEmpty(val),false);
            });
        });
    });