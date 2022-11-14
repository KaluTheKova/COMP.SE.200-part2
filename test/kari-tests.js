const compact = import("./../lib-to-test/src/compact.js")
/*var endsWith = require("./../lib-to-test/src/endsWith.js")
var get = require("./../lib-to-test/src/get.js")
var isEmpty = require("./../lib-to-test/src/isEmpty.js")
var chunk = require("./../lib-to-test/src/chunk.js")*/
var chai = require('chai')
var expect = chai.expect

// compact.js 
describe("compact.js -class removing falseys and only falseys.", () => {
    it("Removes false", () => {
        expect(() => compact.compact([1, 2, false]).to.equal([1, 2]))
    })
    it("Removes 0", () => {
        expect( () => compact.compact([3, 4, 0]).to.equal([3, 4]))
    })
    it("Removes null", () => {
        expect( () => compact.compact([5, 6, null]).to.equal([5, 6]))
    })
    it("Removes empty string", () => {
        expect( () => compact.compact([7, 8, ""]).to.equal([7, 8]))
    })
    it("Removes NaN", () => {
        expect( () => compact.compact([9, 10, NaN]).to.equal([9, 10]))
    })
    it("Removes undefined", () => {
        expect( () => compact.compact([-1, -2, undefined]).to.equal([-1, -2]))
    })
    it("Doesn't remove numbers if not needed", () => {
        expect( () => compact.compact([-1, -2, 1, 2, 79996, "asd"]).to.equal([-1, -2, 1, 2, 79996, "asd"]))
    })
})

// endsWith.js


// get.js


// isEmpty.js


// chunk.js

