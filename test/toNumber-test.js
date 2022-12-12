import toNumber from "./../lib-to-test/src/toNumber.js";
import { expect } from "chai";

// toNumber.js
describe("toNumber.js Converts value to a number", function() {
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
    it("Returns NaN if value is symbol", function() {
        var query1 = toNumber(Symbol('a'))

        const answer1 = NaN
        expect(query1).to.deep.equal(answer1)
    });
    it("Returns NaN is object", function() {
        var query1 = toNumber({kissa:"koira"})

        const answer1 = NaN
        expect(query1).to.deep.equal(answer1)
    });
    it("Returns NaN if value is not a string", function() {
        var query1 = toNumber(undefined)

        const answer1 = NaN
        expect(query1).to.deep.equal(answer1)
    });
});
