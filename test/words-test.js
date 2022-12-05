import words from "./../lib-to-test/src/words.js";
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