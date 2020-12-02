// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// Chai assert
const assert = require('chai').assert;

import defaultTo from "../src/defaultTo.js";

/****** 11. defaultTo.js tests *****/
describe("defaultTo.js tests", function() {
    describe("Should return defaultValue` value if `value` is `NaN`, `null`, or `undefined`", function() {
        
        const defaultValue = 50;
        
        it("should return defaultValue` if `value` is `NaN`", function() {
            
            assert.strictEqual(defaultTo(NaN,50),defaultValue);
        });
        
        it("should return defaultValue` if `value` is `undefined`", function() {
            
            assert.strictEqual(defaultTo(undefined,50),defaultValue);
        });
        
        it("should return defaultValue` if `value` is `null`", function() {
            
            assert.strictEqual(defaultTo(null,50),defaultValue);
        });
        
        it("should return Value` if `value` is not `NaN`, `null`, or `undefined", function() {
            const value = 1;
            assert.strictEqual(defaultTo(value,50),value);
        });
        
    });
});

