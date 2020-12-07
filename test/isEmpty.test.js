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
            assert.isTrue(isEmpty([]));
        });

        it("Should return true  if `value` is an empty string", function () {
            assert.isTrue(isEmpty(''));
        });

        it("Should return true  if `value` is null", function () {
            assert.isTrue(isEmpty(null));
        });

        it("Should return true  if `value` is undefined", function () {
            assert.isTrue(isEmpty(undefined));
        });

        it("Should return true  if `value` is empty map", function () {
            assert.isTrue(isEmpty(new Map()));
        });

        it("Should return true  if `value` is empty object", function () {
            assert.isTrue(isEmpty({}));
        });

        it("Should return true, if given empty prototype object", function() {
            const func = function() {};
            assert.isTrue(isEmpty(func));
        });

        it("Should return false  if `value` is not an empty object", function () {
            assert.isFalse(isEmpty({"abba": "kabba"}));
        });

        it("Should return false if string is not empty", function () {
            const val = "abba";
            assert.isFalse(isEmpty(val));
        });

        it("Should return false if object is not empty", function () {
            assert.isFalse(isEmpty({"abba": "kabba"}));
        });

        it("should return boolean", function () {
            assert.isBoolean(isEmpty("abba"));
            assert.isBoolean(isEmpty(""));
        });
    });
});
