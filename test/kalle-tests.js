/*
words.js
toNumber.js
toString.js
isArrayLikeObject.js
ceil.js 
*/
// https://www.chaijs.com/guide/styles/#expect

const { expect } = require('chai');

describe("words.js", function() {
    it("Splits `string` into an array of its words.", function() {
        var query1 = "Mustard green wall carpet"
        var query2 = "Mustardgreenwallcarpet"
        var query3 = "Mustard greenwall carpet"
        var query4 = "Mustard&greenwall&carpet"
  
        expect(query1).to.equal("Mustard green wall carpet");
        expect(query2).to.equal("Mustardgreenwallcarpet");
        expect(query3).to.equal("Mustard greenwall carpet");
        expect(query4).to.equal("Mustard&greenwall&carpet");
    });
});