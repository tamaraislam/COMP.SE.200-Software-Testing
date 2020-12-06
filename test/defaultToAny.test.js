// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// Chai assert
const assert = require('chai').assert;

import defaultToAny from "../src/defaultToAny.js";

/****** 12. defaultToAny.js tests *****/
describe("defaultToAny.js tests", function() {
    describe("Should accept multiple default values and returns the first one that is not `NaN`, `null`, or `undefined`", function() {
        const ExpectedOutput = 50;
        
        it("should return first value that is not `NaN`, `null`, or `undefined`", function() {
            const ExpectedResult= 1;
            assert.strictEqual(defaultToAny(1,50,10),ExpectedResult);
        });
        
        it("should return first value that is not `undefined`", function() {
            assert.strictEqual(defaultToAny(undefined,50,undefined,10),ExpectedOutput);
        });
        
        it("should return first value that is not `null`", function() {
            
            assert.strictEqual(defaultToAny(null,undefined,null,50),ExpectedOutput);
        });
        
        it("should return second default value if first `value` is `NaN`, `null` or `undefined", function() {
            const value = NaN;
            assert.isNaN(defaultToAny(undefined, null, NaN),value);
        });
        
    });
});

