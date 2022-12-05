import ceil from "./../lib-to-test/src/ceil.js";
import { expect } from "chai";

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