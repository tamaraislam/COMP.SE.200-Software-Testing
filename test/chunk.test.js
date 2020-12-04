// Importing require so it works on Node.js >14
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Chai assert
const assert = require('chai').assert;

import chunk from "../src/chunk.js";

/****** 7. chunk.js tests *****/
describe("chunk.js tests", function() {
	describe("Should split an Array into given-size chunks", function() {
		it("should return a null array when given size value is less than 1", function() {
			const array = [];
			assert.deepEqual(chunk(['a', 'b', 'c', 'd'],-1), array);
		});
		
		it("should return [['a', 'b'], ['c', 'd']] when test data is chunk(['a', 'b', 'c', 'd'], 2)", function() {
			const ExpectedChunk = [['a', 'b'],['c', 'd']];
			assert.deepEqual(chunk(['a', 'b', 'c', 'd'],2), ExpectedChunk);
		});
		
		it("should return [['a', 'b', 'c'], ['d']] when test data is  chunk(['a', 'b', 'c', 'd'], 3)", function() {
			const Expected_Chunk = [['a', 'b', 'c'],['d']];
			assert.deepEqual(chunk(['a', 'b', 'c', 'd'],3), Expected_Chunk);
		});
		
		it("return value is an array ", function() {
			assert.isArray(chunk([]), Array);
		});
		
	});
});

