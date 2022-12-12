import { expect } from "chai"
import endsWith from "./../lib-to-test/src/endsWith.js" 

// endsWith.js
describe("endsWith.js Checks if `string` ends with the given target string.", () => {
    it("If position < 0, expect empty string", () => {
        expect( endsWith("kissatkoiria", "", -8)).to.deep.equal(true)
        expect( endsWith("kissatkoiria", "kissat", -8)).to.deep.equal(false)
    })
    it("if position > length, expect the whole word", () => {
        expect( endsWith("kissatkoiria", "koiria", 22)).to.deep.equal(true)
        expect( endsWith("kissatkoiria", "kissat", 22)).to.deep.equal(false)
    })
    it("Finds the correct ending with a parameter from middle of the line", () => {
        expect( endsWith("kissatkoiria", "koiria", 6)).to.deep.equal(false)
        expect( endsWith("kissatkoiria", "kissat", 6)).to.deep.equal(true)
    })
    it("Throws a type error if input is not a string", () => {
        expect(() => endsWith(15)).to.throw(TypeError)
    })
})