// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

/**** Imports for all the different javascript modules *****/
import add from "../src/add.js";
import at from "../src/at.js";
import camelCase from "../src/camelCase.js";
import capitalize from "../src/capitalize.js";

/******** 
 * 
 *  TESTS
 * 
*********/

/***** Default instructional test of mocha *****/
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it("Should return 0 when the value is present", function() {
      assert.equal([1, 2, 3].indexOf(1), 0);
    });
  });
});


/***** 1.  add.js tests *****/
describe("add.js tests", function() {
  it("should return 2 when 1+1 are added", function() {
    assert.equal(2, add(1, 1));
  });

  it("should return 1 when 0 and 1 are added", function() {
    assert.equal(1, add(0, 1));
  });

  it("should return max integer + 1", function() {
    assert.equal(Number.MAX_SAFE_INTEGER + 1, add(Number.MAX_SAFE_INTEGER, 1));
  });
});

/****** 2. at.js tests *****/
describe("at.js tests", function(){
  it("should return array with string", function() {
    const testObject = { "hello": "world" };
    const testPath = "hello";

    const returnValue = at(testObject, testPath);

    assert.typeOf(returnValue, "array", "return value is an array");

    assert.deepEqual(returnValue, ["world"]);
  });

  it("should return an array with picked values", function() {
    const testObject = { 'a': [{ 'b': { 'c': 3 } }, 4, 2] };

    assert.deepEqual(at(testObject, ["a[0]", "a[2]"]), [{ 'b': { 'c': 3 } }, 2]);
  });
});

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


/****** 4. capitalize.js tests *****/
describe("capitalize.js tests", function() {
  describe("Should converts the first character of `string` to upper case and the remaining to lower case", function() {
    const expectedString = "Fred";
    const expectedOutput = "123aba";
    const expectedResult = " ";

    it("should return the first character of `string` to upper case when all characters  of `string` are upper case", function() {
      assert.equal(capitalize("FRED"), expectedString);
    });

    it("should return the first character of `string` to upper case when all characters  of `string` are lower case", function() {
      assert.equal(capitalize("fred"), expectedString);
    });

    it("should return the string as it is when first characters of `string` are number and then it is lower case", function() {
      assert.equal(capitalize("123aba"), expectedOutput);
    });
     
    it("should return null", function() {
      assert.equal(capitalize(" "), expectedResult);

    });
  });
});