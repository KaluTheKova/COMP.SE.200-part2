import toString from "./../lib-to-test/src/toString.js";
import { expect } from "chai";

// toString.js
describe("toString.js converts `value` to a string", function() {
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
});