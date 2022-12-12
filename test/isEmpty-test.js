import { expect } from "chai"
import isEmpty from "./../lib-to-test/src/isEmpty.js"

function returnnull(){
    return null
}
// isEmpty.js
describe("isEmpty.js Checks if `value` is an empty object, collection, map, or set. Objects are considered empty if they have no own enumerable string keyed properties. Array-like values such as `arguments` objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a `length` of `0`. Similarly, maps and sets are considered empty if they have a `size` of `0`.", () => {
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
    it("Returns true for a Set", () => {
        expect(isEmpty(new Set())).to.deep.equal(true)
    })
    it("Returns true for a prototype", () => {
        expect(isEmpty(returnnull.prototype)).to.deep.equal(true)
    })
    it("Returns true for a arguments", () => {
        function argumentstest(a, b){
            expect(isEmpty(arguments)).to.deep.equal(false)
        }
        argumentstest(null, null)
    })
})

// c8 --exclude  "lib-to-test/src/isArguments.js" --exclude "lib-to-test/src/isArrayLike.js" --exclude "lib-to-test/src/isBuffer.js" --exclude "lib-to-test/src/isLength.js" --exclude "lib-to-test/src/isObject.js" --exclude "lib-to-test/src/isObjectLike.js" --exclude "lib-to-test/src/isSymbol.js" --exclude "lib-to-test/src/isTypedArray.js" --exclude "lib-to-test/src/memoize.js" --exclude "lib-to-test/src/slice.js" --exclude "lib-to-test/src/toFinite.js" --exclude "lib-to-test/src/toInteger.js" --reporter=lcov npm test