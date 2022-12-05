import { expect } from "chai"
import chunk from "./../lib-to-test/src/chunk.js"

// chunk.js
describe("chunk.js", () => {
    it("Splits even chunks evenly (9/3)", () => {
        expect(chunk("123456789", 3)).to.deep.equal(["123", "456", "789"])
    })
    it("Splits uneven chunks (10/3)", () => {
        expect(chunk("1234567890", 3)).to.deep.equal(["123", "456", "789", "0"])
    })
    it("Does not chunk numbers", () => {
        expect(chunk(123456)).to.deep.equal(123456)
    })
    it("Chunks array of words numbers", () => {
        expect(chunk(["cats", "dogs", "cats1", "and", "dogs2"], 2)).to.deep.equal([["cats", "dogs"], ["cats1", "and"], ["dogs2"]])
    })
    it("Returns an empty array from a null value", () => {
        expect(chunk(null, 3)).to.deep.equal([])
    })
    it("Returns an empty array from an undefined value", () => {
        expect(chunk(undefined, 3)).to.deep.equal([])
    })
    it("Returns an empty array if chunk size is zero", () => {
        expect(chunk("1234567890", 0)).to.deep.equal([])
    })
    it("Returns an empty array if chunk size is less than zero", () => {
        expect(chunk("1234567890", -1)).to.deep.equal([])
    })
})