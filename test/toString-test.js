import toString from "./../lib-to-test/src/toString.js";
import { expect } from "chai";

// toString.js
describe("toString.js Converts `value` to a string. An empty string is returned for `null` and `undefined` values. The sign of `-0` is preserved.", function() {
    it("Converts 3.2 to a string", function() {
        var query1 = toString(3.2)
  
        expect(query1).to.be.a('string')
    });
    it("Converts null to ''", function() {
        var query1 = toString(null)

        const answer1 = "''"
  
        expect(query1).to.deep.equal(answer1)
    });
    it("Converts [1, 2, 3] to a string", function() {
        var query1 = toString([1, 2, 3])

        const answer1 = "1,2,3"
  
        expect(query1).to.deep.equal(answer1)
    });
    it("Checks if value is already string", function() {
        var query1 = toString(typeof string)

        const answer1 = typeof string
        expect(query1).to.deep.equal(answer1)
    });
    it("Checks if value is symbol", function() {
        var query1 = toString(Symbol('a'))

        const answer1 = 'Symbol(a)'
        expect(query1).to.equal(answer1)
    });
});