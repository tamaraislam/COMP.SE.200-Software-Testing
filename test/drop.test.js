// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
// Chai assert
const assert = require('chai').assert;

import drop from "../src/drop.js";

/****** 15.drop.js tests *****/

describe("drop.js tests", function () {
    describe("Should slice a given array, dropping a desired amount of elements from the beginning", function () {
        it("should return [2, 3] when n=1 ", function () {
            const expectedResult = [2, 3];
            assert.deepEqual(drop([1, 2, 3]), expectedResult);
        });
        
        it("should return [3] when n=2", function () {
            const ExpectedResult = [3];
            assert.deepEqual(drop([1, 2, 3], 2), ExpectedResult);
        });
        
        it("should return [] when n=5", function () {
            const expectedOutput = [];
            assert.deepEqual(drop([1, 2, 3], 5), expectedOutput)
        });
        
        it("should return [1, 2, 3] when n=0", function () {
            const expectedOutput2 = [1, 2, 3];
            assert.deepEqual(drop([1, 2, 3],0), expectedOutput2)
        });

        it("Should return an empty array from null parameter", function() {
            const returnVal = drop(null);
            assert.isArray(returnVal);
            assert.isEmpty(returnVal);
        });

        it("Should return array of negative numbers with one sliced off", function() {
            assert.deepEqual(drop([-1, -2, -3]), [-2, -3]);
        });

        it("Should return original array if slice parameter is negative", function() {
            assert.deepEqual(drop([1, 2, 3], -99), [1, 2, 3]);
        });
        
        it("should return an array ", function () {
            assert.isArray(drop([]));
        });
    });
});