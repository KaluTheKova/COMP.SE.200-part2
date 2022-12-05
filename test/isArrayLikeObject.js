import isArrayLikeObject from "./../lib-to-test/src/isArrayLikeObject.js";
import { expect } from "chai";

// isArrayLikeObject
describe("isArrayLikeObject.js Checks if `value` is array-like. A value is considered array-like if it's not a function and has a `value.length` that's an integer greater than or equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`. Also checks if `value` is an object", function() {
    it("Checks if [1, 2, 3] is an arraylike object", function() {
        var query1 = isArrayLikeObject([1, 2, 3])

        expect(query1).to.deep.equal(true)
    });
    it("Checks if 'abc' is an arraylike object", function() {
        var query1 = isArrayLikeObject('abc')
  
        expect(query1).to.deep.equal(false)
    });
    it("Checks if Function is an arraylike object", function() {
        var query1 = isArrayLikeObject(Function)
  
        expect(query1).to.deep.equal(false)
    });
});