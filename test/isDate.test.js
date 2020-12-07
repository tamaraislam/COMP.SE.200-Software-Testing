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
        it("should return true if `value` is new Date ", function () {
            assert.isTrue(isDate(new Date()));
        });

        it("should return true if `value` is Date.now() ", function () {
            assert.isTrue(isDate(Date.now()));
        });
        
        it("Should Return `false` if `value` is a string", function () {
            assert.isFalse(isDate("Mon April 23 2012"));
        });

        it("Should Return `false` if `value` is a new String", function () {
            assert.isFalse(isDate(new String("Mon April 23 2012")));
        });

        it("Should Return `false` if `value` is undefined", function () {
            assert.isFalse(isDate(undefined));
        });

        it("Should Return `false` if `value` is NaN", function () {
            assert.isFalse(isDate(Number.NaN));
        });
        
        it("Should Return `false` if `value` is null", function () {
            assert.isFalse(isDate(null));
        });

        it("should return boolean", function () {
            assert.isBoolean(isDate(new Date()));
            assert.isBoolean(isDate("Mon April 23 2012"));     
        });
    });
});