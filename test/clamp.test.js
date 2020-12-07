// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(import.meta.url);
// Chai assert
const assert = require('chai').assert;

import clamp from "../src/clamp.js";

/****** 8. clamp.js tests *****/

describe("clamp.js tests", function () {
    const expectedResult = 5;
    describe("Should clamp `number` within the inclusive `lower` and `upper` bounds", function () {
        it("should return the number if inclusive in range", function () {
            assert.strictEqual(clamp(5, 0, 10), expectedResult);
        });
        
        it("should return max if the number is larger", function () {
            assert.strictEqual(clamp(10, -5, 5), expectedResult);
        });
        
        it("should return min if the number is smaller", function () {
            const expectedOutput = -5;
            assert.strictEqual(clamp(-10, -5, 5), expectedOutput)
        });
        
        it("should return a number ", function () {
            assert.isNumber(clamp(1, 2, 3));
        });
        
        it("should return a finite number ", function () {
            const expectedNumber = 2;
            assert.isFinite(clamp(2,NaN,2),expectedNumber)
        });
        
        it("Input is above the upper bound, return upper bound", function () {
            const upperBound = 5;
            const input = 10;
            const lowerBound = -5;
            assert.strictEqual(clamp(input,lowerBound,upperBound), 5);
        });
        
        it("Input is below the lower bound, return lower bound", function () {
            const UpperBound= 5;
            const Input = -10;
            const LowerBound = -5;
            assert.strictEqual(clamp(Input,LowerBound,UpperBound), -5);
        });
    });
});