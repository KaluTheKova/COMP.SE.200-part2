import { expect } from "chai"
import isEmpty from "./../lib-to-test/src/isEmpty.js"

// isEmpty.js
describe("isEmpty.js", () => {
    it("Returns true for a number", () => {
        expect(isEmpty(1)).to.deep.equal(true)
    })
    it("Returns true for null", () => {
        expect(isEmpty(null)).to.deep.equal(true)        
    })
    it("Returns true for undefined", () => {
        expect(isEmpty(undefined)).to.deep.equal(true)
    })
    it("Returns true for an empty string", () => {
        expect(isEmpty("")).to.deep.equal(true)
    })
    it("Returns true for an empty object", () => {
        expect(isEmpty({})).to.deep.equal(true)
    })
    it("Returns true for an empty array", () => {
        expect(isEmpty([])).to.deep.equal(true)
    })
    it("Returns false for an array", () => {
        expect(isEmpty([1, 2, 3])).to.deep.equal(false)
    })
    it("Returns false for an object", () => {
        expect(isEmpty({a: 1, b: 2, c: 3})).to.deep.equal(false)
    })
    it("Returns false for a string", () => {
        expect(isEmpty("123")).to.deep.equal(false)
    })
})