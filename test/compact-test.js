import { expect } from "chai"
import compact from "./../lib-to-test/src/compact.js" 

describe("compact.js Creates an array with all falsey values removed. The values `false`, `null`, `0`, `\"\"`, `undefined`, and `NaN` are falsey", () => {
    it("Removes false", () => {
        expect(compact([1, 2, false])).to.deep.equal([1, 2])
    })
    it("Removes false", () => {
        expect(compact([false, 2, false])).to.deep.equal([2])
    })
    it("Removes 0", () => {
        expect( compact([3, 4, 0])).to.deep.equal([3, 4])
    })
    it("Removes null", () => {
        expect( compact([5, 6, null])).to.deep.equal([5, 6])
    })
    it("Removes empty string", () => {
        expect( compact([7, 8, ""])).to.deep.equal([7, 8])
    })
    it("Removes NaN", () => {
        expect( compact([9, 10, NaN])).to.deep.equal([9, 10])
    })
    it("Removes undefined", () => {
        expect( compact([-1, -2, undefined])).to.deep.equal([-1, -2])
    })
    it("Doesn't remove numbers if not needed", () => {
        expect( compact([-1, -2, 1, 2, 79996, "asd"])).to.deep.equal([-1, -2, 1, 2, 79996, "asd"])
    })
    it("Throws a type error if input is not a list", () => {
        expect(() => compact(52)).to.throw(TypeError)
    })
})