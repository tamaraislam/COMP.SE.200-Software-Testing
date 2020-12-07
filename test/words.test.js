// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import words from "../src/words.js";

describe("words.js tests", function() {
  it("Should return words of the string in an array with extra patterns", function() {
    const s = "I like turtles ! &";
    const desiredArr = ["I", "like", "turtles"];

    const returnVal = words(s);

    assert.deepEqual(returnVal, desiredArr);
  });

  it("Should return words of the string in an array", function() {
    const s = "I like turtles";
    const desiredArr = ["I", "like", "turtles"];

    const returnVal = words(s);

    assert.deepEqual(returnVal, desiredArr);
  });

  it("Should return words and desired RegExp pattern of the string in an array", function() {
    const s = "I like & love turtles !";
    const desiredArr = ["I", "like", "&", "love", "turtles"];
    const regExp = new RegExp(/&/);

    const returnVal = words(s, regExp);

    assert.deepEqual(returnVal, desiredArr);
  });

  it("Should return words and desired pattern of the string in an array with extra patterns", function() {
    const s = "I like & love turtles \"!\"";
    const desiredArr = ["I", "like", "&", "love", "turtles"];
    const regExp = new RegExp("/&/");

    const returnVal = words(s, regExp);

    assert.deepEqual(returnVal, desiredArr);
  });

  it("Should always return an array", function() {
    assert.isArray(words());
    assert.isArray(words("Jaba daba doo", "jaba"));
  });
});