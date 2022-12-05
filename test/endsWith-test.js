import { expect } from "chai"
import endsWith from "./../lib-to-test/src/endsWith.js" 

// endsWith.js
describe("endsWith.js Checks if `string` ends with the given target string.", () => {
    it("Finds the correct ending", () => {
        expect( endsWith("kissatkoiria", "koiria")).to.deep.equal(true)
        expect( endsWith("kissatkoiria", "kissat")).to.deep.equal(false)
    })
    it("Finds the correct ending with a parameter", () => {
        expect( endsWith("kissatkoiria", "koiria", 12)).to.deep.equal(true)
        expect( endsWith("kissatkoiria", "kissat", 12)).to.deep.equal(false)
    })
    it("Finds the correct ending with a parameter from middle of the line", () => {
        expect( endsWith("kissatkoiria", "koiria", 6)).to.deep.equal(false)
        expect( endsWith("kissatkoiria", "kissat", 6)).to.deep.equal(true)
    })
    it("Throws a type error if input is not a string", () => {
        expect(() => endsWith(15)).to.throw(TypeError)
    })
})