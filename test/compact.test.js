// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import compact from "../src/compact.js";

/****** 9. compact.js tests *****/
describe("compact.js tests", function() {
    describe("Should remove all the “falsey” values from an array", function() {
        
        const expectedResult = [1, 2, 3];
        
        it("should return array removing all NaN value", function() {
            
            assert.deepEqual(expectedResult, compact([NaN, 1, false, 2, '', 3]));
        });
        
        it("should return array removing all undefined value", function() {
            
            assert.deepEqual(expectedResult, compact([undefined, 1, false, 2, '', 3]));
        });
        
        it("should return array removing all falsey value", function() {
            
            assert.deepEqual(expectedResult, compact([0, 1, false, 2, '', 3]));
        });
        
        it("should return array removing all falsey value", function() {
            const output = [0, false, null, undefined," ", NaN];
            
            assert.deepEqual(output, compact([]));
        });
        
        it("should return itself when given an array", function() {
            const arr = ["hello", "world"];
            
            assert.deepEqual(arr, compact(arr));
        });
        
        it("should return itself when given an array", function() {
            const array = [];
            
            assert.deepEqual(array, compact(array));
        });
        
        it("should return an array", function() {
            assert.isArray(compact([]), Array);
        });    
    });
});
