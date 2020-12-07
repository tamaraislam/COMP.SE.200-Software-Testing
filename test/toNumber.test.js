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
            assert.isNumber(toNumber(3));
        });
        
        it("Should return 5e-324 when input is MIN_VALUE", function () {
            assert.strictEqual(toNumber(Number.MIN_VALUE),5e-324);
        });
        
        it("Should Check input is a finite number", function () {
            assert.isFinite(toNumber(9999999999));
        });
        
        it("Should Check input is a NaN", function () {
            assert.isNaN(toNumber(Number.NaN));
        });
        
        it("should return 3.2 when input is 3.2", function () {
            assert.strictEqual(toNumber(3.2), 3.2);
        });
        
        it("should return 3.2 when input is '3.2'", function () {
            assert.strictEqual(toNumber("3.2"), 3.2);
        });

        it("should return 0 when input is 0", function () {
            assert.strictEqual(toNumber(0), 0);
        });

        it("Should return array number", function() {
            assert.strictEqual(toNumber([2]), 2);
        });

        it("Should return NaN when input is a Symbol", function() {
            assert.isNaN(toNumber(Symbol("abba")));
        });

        it("Should return NaN when input is an empty function", function() {
            assert.isNaN(toNumber(new function() {}));
        });

        it("Should return NaN when the input is an object with no numbers", function() {
            assert.isNaN(toNumber({'a': 'b'}));
        });

        it("Should return NaN when input is undefined or null", function() {
            assert.isNaN(toNumber(undefined));
            assert.isNaN(toNumber(null));
        });
    });
});