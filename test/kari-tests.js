import compact from "./../lib-to-test/src/compact.js" 
import { expect } from "chai"
// var expect = chai.expect

// compact.js 
describe("Testing chai:", () => {
    it("1=1:", ()=>{
        expect(1).to.equal(1)
    })
    it("[1, 2] === [1, 2]:", ()=>{
        expect([1, 2]).to.deep.equal([1, 2])
    })
})
describe("compact.js -class", () => {
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
        expect(compact("catsdogs")).to.throw(TypeError)
    })
})

const { endsWith } = import("./../lib-to-test/src/endsWith.js")
// endsWith.js
describe("endsWith.js ", () => {
    it("Finds the correct ending", () => {
        expect( () => endsWith("kissatkoiria", "koiria").to.equal(true))
        expect( () => endsWith("kissatkoiria", "kissat").to.equal(false))
    })
    it("Finds the correct ending with a parameter", () => {
        expect( () => endsWith("kissatkoiria", "koiria", 11).to.equal(true))
        expect( () => endsWith("kissatkoiria", "kissat", 11).to.equal(false))
    })
    it("Finds the correct ending with a parameter from middle of the line", () => {
        expect( () => endsWith("kissatkoiria", "koiria", 5).to.equal(false))
        expect( () => endsWith("kissatkoiria", "kissat", 5).to.equal(true))
    })
    it("Throws a type error if input is not a string", () => {
        //console.log(endsWith(1, 1))
        expect( () => endsWith(1, 1).to.equal(false))
        //expect( () => endsWith("kissatkoiria", "kissat", 5).to.equal(true))
    })
})

const { get } = import("./../lib-to-test/src/get.js")
// get.js


const { isEmpty } = import("./../lib-to-test/src/isEmpty.js")
// isEmpty.js


const { chunk } = import("./../lib-to-test/src/chunk.js")
// chunk.js

