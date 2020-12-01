// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import clamp from "../src/clamp.js";

/****** 8. clamp.js tests *****/

describe("clamp.js tests", function() {
    const expectedResult = 5;
    describe("Should clamp `number` within the inclusive `lower` and `upper` bounds", function () {
        it("should return the number", function () {
            
            assert.equal(clamp(5, 0, 10), expectedResult);
        });
        it("should return max if the number is larger", function () {
            assert.equal(clamp(10, -5, 5), expectedResult);
        });
        it("should return min if the number is smaller", function () {
            const expectedOutput = -5;
            assert.equal(clamp(-10, -5, 5), expectedOutput)
        });
    });
});