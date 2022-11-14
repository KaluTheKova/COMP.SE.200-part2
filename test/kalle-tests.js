/*
words.js
toNumber.js
toString.js
isArrayLikeObject.js
ceil.js 
*/
// https://www.chaijs.com/guide/styles/#expect

//import words from "../lib-to-test/src/words.js";

//const words   = import("./../lib-to-test/src/words.js");
import words from "./../lib-to-test/src/words.js";
import { expect } from "chai";

describe("words.js -class Splits `string` into an array of its words", function() {
    it("Splits `string` into an array of its words.", function() {
        var query1 = words("Mustard green wall carpet")
        var query2 = "Mustardgreenwallcarpet"
        // var query3 = "Mustard greenwall carpet"
        // var query4 = "Mustard&greenwall&carpet"
        // var query5 = "Mustard&()¤(%/&%green¤%//¤%¤/wall¤%&¤&%¤&carpet"

        const answer1 = ["Mustard", "green", "wall", "carpet"]
        const answer2 = "Mustardgreenwallcarpet"
  
        expect(query1).to.deep.equal(answer1)
        expect(query2).to.deep.equal("Mustardgreenwallcarpet")
        // expect(query3).to.equal("Mustard greenwall carpet");
        // expect(query4).to.equal("Mustard&greenwall&carpet");
        // expect(query5).to.equal("Mustard&()¤(%/&%green¤%//¤%¤/wall¤%&¤&%¤&carpet");
    });
});
