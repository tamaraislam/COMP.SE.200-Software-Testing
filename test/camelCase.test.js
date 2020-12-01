// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

/**** Imports for all the different javascript modules *****/

import camelCase from "../src/camelCase.js";

/****** 3. camelCase.js tests *****/
describe("camelCase.js tests", function() {
    describe("Should return camelCased string from any string", function() {
      const expectedString = "fooBar";
      
      it("with a spacebar", function() {
        assert.equal(camelCase("Foo Bar"), expectedString);
      });
  
      it("with lines", function() {
        assert.equal(camelCase("--foo-bar--"), expectedString);
      });
  
      it("with underscores", function() {
        assert.equal(camelCase("__FOO_BAR__ "), expectedString);
      });
  
      it("return value is a string", function() {
        assert.typeOf(camelCase("abba"), "string");
      });
    });
  });