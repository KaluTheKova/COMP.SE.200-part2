import compact from "./../lib-to-test/src/compact.js" 
import { expect } from "chai"

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
        expect(() => compact(52)).to.throw(TypeError)
    })
})

import endsWith from "./../lib-to-test/src/endsWith.js" 
// endsWith.js
describe("endsWith.js ", () => {
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

import get from "./../lib-to-test/src/get.js"
// get.js
describe("get.js ", () => {
    it("Gets from a table", () => {
        expect( get({a: [1, 2], b: "B", c: 3}, "a[0]")).to.deep.equal(1)
    })
    it("Gets from a string", () => {
        expect( get({a: [1, 2], b: "ABC", c: 3}, "b[1]")).to.deep.equal('B')
    })
    it("Gets from a table of objects", () => {
        let ob1 = {a: "A", b: "B", c: "C"}
        let ob2 = {a: "D", b: "E", c: "F"}
        let ob3 = {a: "G", b: "H", c: "I"}
        expect( get({a: [ob1, ob2, ob3], b: "B", c: 3}, "a[2].c")).to.deep.equal("I")
    })
    it("Returns default value for invalid get path", () => {
        expect( get({a: [1, 2], b: "B", c: 3}, "a.b.c.d[5]", "kissatkoiria")).to.deep.equal("kissatkoiria")
    })
    it("Returns null default value for invalid get path", () => {
        expect( get({a: [1, 2], b: "B", c: 3}, "a.b.c.d[5]", null)).to.deep.equal(null)
    })
    it("Returns undefined for invalid get path and undefined parameter", () => {
        expect( get({a: [1, 2], b: "B", c: 3}, "a.b.c.d[5]")).to.deep.equal(undefined)
    })
})

import isEmpty from "./../lib-to-test/src/isEmpty.js"
isEmpty.js
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