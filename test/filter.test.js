// Importing require so it works on Node.js >14
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
    // Chai assert
    const assert = require('chai').assert;
    
    import filter from "../src/filter.js";
    
    /****** 19.filter.js tests *****/
    
    describe("filter.js tests", function () {
        
        describe("Should iterate over elements of a given array & should return a new array for which the given predicate returns “truthy", function () {
            it("should return true when filter([true, true, false], Boolean)", function () {
                const testData1 = [true, true, false];
                const expectedResult = [true,true];
                assert.deepEqual(filter(testData1,Boolean), expectedResult);
            });
            
            it("should return object for  ['barney'] when filter([{ 'user': 'barney', 'active': true },{ 'user': 'fred', 'active': false } ], active)", function () {
                const testData2 = [{ 'user': 'barney', 'active': true },{ 'user': 'fred', 'active': false } ];
                const ExpectedResult = [{ 'user': 'barney', 'active': true }];
                assert.deepEqual(filter(testData2,({ active }) => active), ExpectedResult);
            });
            
            it("should return an array ", function () {
                assert.isArray(filter(), Array);
            });
        });
    });