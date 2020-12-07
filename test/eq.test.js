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
                assert.isTrue(eq(object, object));
            });
            
            it("should return true when  eq('abba', 'abba')", function () {
                assert.isTrue(eq("abba", "abba"));
            });
            
            it("should return false when eq('a', Object('a'))", function () {
                assert.deepEqual(eq('a', Object('a')), false)
            });
            
            it("Should return false when comparing to different object", function() {
                assert.isFalse(eq(object, other));
            });
                
            it("should return true when eq(NaN, NaN)", function () {
                assert.isTrue(eq(Number.NaN, Number.NaN));
            });

            it("should return boolean", function () {
                assert.isBoolean(eq("abba", "abba")); 
                assert.isBoolean(eq());
            });
        });
    });
