// Importing require so it works on Node.js >14
import {
	createRequire
} from 'module';
const require = createRequire(
	import.meta.url);

// Chai assert
const assert = require('chai').assert;

import ceil from "../src/ceil.js";

/****** 6. ceil.js tests *****/
describe("ceil.js tests", function () {
	describe("Should return rounds up values according to the nearest given precision", function () {

		it("should return 2 when test data is ceil(1.2345)", function () {
			assert.strictEqual(ceil(1.2345), 2);
		});

		it("should return 1.24 when test data is ceil(1.2345, 2)", function () {
			assert.strictEqual(ceil(1.2345, 2), 1.24);
		});

		it("should return 200 when test data is ceil(123.456, -2)", function () {
			assert.strictEqual(ceil(123.456, -2), 200);
		});

		it("should return a number ", function () {
			assert.typeOf(ceil(), "number");
		});

	});
});