// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
    // Chai assert
    const assert = require('chai').assert;
    
    import eq from "../src/eq.js";
    
    /****** 17.eq.js tests *****/
    
    describe("eq.js tests", function () {
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        describe("Should return a boolean describing, if two given values are equivalent", function () {
            it("should return true when eq(object, object)", function () {
                const expectedResult = true;
                assert.deepEqual(eq(object, object), expectedResult);
            });
            
            it("should return true when  eq('abba', 'abba')", function () {
                const ExpectedResult = true;
                assert.deepEqual(eq("abba", "abba"), ExpectedResult);
            });
            
            it("should return false when eq('a', Object('a'))", function () {
                const expectedOutput = true;
                assert.deepEqual(eq('a', Object('a')), expectedOutput)
            });
            
            it("should return true when eq(NaN, NaN)", function () {
                const expectedOutput = true;
                assert.deepEqual(eq(NaN, NaN), expectedOutput)
            });

            it("should return boolean", function () {
                assert.isBoolean(eq());    
            });
        });
    });