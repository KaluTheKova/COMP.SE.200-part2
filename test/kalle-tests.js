/*
words.js
toNumber.js
toString.js
isArrayLikeObject.js
ceil.js 
*/
// https://www.chaijs.com/guide/styles/#expect


import words from "./../lib-to-test/src/words.js";
import toNumber from "./../lib-to-test/src/toNumber.js";
import toString from "./../lib-to-test/src/toString.js";
import isArrayLikeObject from "./../lib-to-test/src/isArrayLikeObject.js";
import ceil from "./../lib-to-test/src/ceil.js";
import { expect } from "chai";

// words.js
describe("words.js splits `string` into an array of its words", function() {
    it("Splits string into an array of its words.", function() {
        var query1 = words("Mustard green wall carpet")
        var query2 = words("Mustardgreenwallcarpet")
        var query3 = words("Mustard greenwall carpet")

        const answer1 = ["Mustard", "green", "wall", "carpet"]
        const answer2 = ["Mustardgreenwallcarpet"]
        const answer3 = ["Mustard", "greenwall", "carpet"]
  
        expect(query1).to.deep.equal(answer1)
        expect(query2).to.deep.equal(answer2)
        expect(query3).to.deep.equal(answer3)

    });
    it("Splits strings that contain special characters", function() {
        var query1 = words("Mustard&greenwall&carpet")
        var query2 = words("Mustard&()¤(%/&%green¤%//¤%¤/wall¤%&¤&%¤&carpet")
        const answer1 = ["Mustard", "greenwall", "carpet"]
        const answer2 = ["Mustard", "green", "wall", "carpet"]
  
        expect(query1).to.deep.equal(answer1)
        expect(query2).to.deep.equal(answer2)
    });
    it("Splits strings that contain special characters using regex /[^, ]+/g", function() {
        var query1 = words('fred, barney, & pebbles', /[^, ]+/g)
        var query2 = words("Mustard&()¤(%/&%green¤%//¤%¤/wall¤%&¤&%¤&carpet", /[^,¤(%/&() ]+/g)
        const answer1 = ['fred', 'barney', '&', 'pebbles']
        const answer2 = ["Mustard", "green", "wall", "carpet"]
  
        expect(query1).to.deep.equal(answer1)
        expect(query2).to.deep.equal(answer2)
    });
});

// toNumber.js
describe("toNumber.js converts value to a number", function() {
    it("Converts a string to a number", function() {
        var query1 = toNumber("3.2")

        const answer1 = 3.2
  
        expect(query1).to.deep.equal(answer1)

    });
    it("Converts the input to type of number", function() {
        var query1 = toNumber("6.6")
  
        expect(query1).to.be.a('number')
    });
    it("Converts Number.MIN_VALUE to numerical value", function() {
        var query1 = toNumber(Number.MIN_VALUE)

        const answer1 = 5e-324
  
        expect(query1).to.deep.equal(answer1)
    });
    it("Converts Infinity to numerical Infinity", function() {
        var query1 = toNumber(Infinity)

        const answer1 = Infinity
  
        expect(query1).to.deep.equal(answer1)
    });
});

// toString.js
describe("toString.js converts `value` to a string", function() {
    it("Converts 3.2 to a string", function() {
        var query1 = toString(3.2)
  
        expect(query1).to.be.a('string')
    });
    it("Converts null to ''", function() {
        var query1 = toString(null)

        const answer1 = "\'\'"
  
        expect(query1).to.deep.equal(answer1)
    });
    it("Converts [1, 2, 3] to a string", function() {
        var query1 = toString([1, 2, 3])

        const answer1 = "1,2,3"
  
        expect(query1).to.deep.equal(answer1)
    });
});

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

// ceil.js 
describe("ceil.js Computes `number` rounded up to `precision`. (Round up: the smallest integer greater than or equal to a given number", function() {
    it("Rounds 4.006 to 5", function() {
        var query1 = ceil(4.006)

        expect(query1).to.deep.equal(5)
    });
    it("Rounds 6.004 with precision 2 to 6.01", function() {
        var query1 = ceil(6.004, 2)
  
        expect(query1).to.deep.equal(6.01)
    });
    it("Rounds 6040 with precision -2 to 6100", function() {
        var query1 = ceil(6040, -2)
  
        expect(query1).to.deep.equal(6100)
    });
    it("Expects string to equal NaN", function() {
        var query1 = ceil("six")
  
        expect(query1).to.deep.equal(NaN)
    });
});