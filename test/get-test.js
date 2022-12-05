import { expect } from "chai"
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