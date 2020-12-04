// Importing require so it works on Node.js >14
import {
  createRequire
} from 'module';
const require = createRequire(
  import.meta.url);
  
  // Chai assert
  const assert = require('chai').assert;
  
  /**** Imports for all the different javascript modules *****/
  
  import capitalize from "../src/capitalize.js";
  
  /****** 4. capitalize.js tests *****/
  describe("capitalize.js tests", function () {
    describe("Should converts the first character of `string` to upper case and the remaining to lower case", function () {
      const expectedFredOutput = "Fred";
      const expectedAbaOutput = "123aba";
      
      
      it("should return the first character of `string` to upper case when all characters  of `string` are upper case", function () {
        assert.equal(capitalize("FRED"), expectedFredOutput);
      });
      
      it("should return the first character of `string` to upper case when all characters  of `string` are lower case", function () {
        assert.equal(capitalize("fred"), expectedFredOutput);
      });
      
      it("should return the string as it is when first characters of `string` are number and then it is lower case", function () {
        assert.equal(capitalize("123aba"), expectedAbaOutput);
      });
      
      it("return value is a string", function() {
        assert.isString(capitalize(""), String);
      });
    });
  });