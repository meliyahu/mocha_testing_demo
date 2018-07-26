const assert = require('chai').assert;
const app = require('../app');

describe('App', () => {
    describe('sayHello()', () => {
        it('sayHello should return => hello', () => {
            let result = app.sayHello();
            assert.equal(result, 'hello');
        })
        it('sayHello should return type string', () => {
            let result = app.sayHello();
            assert.typeOf(result, 'string');
        })
    })

    describe('sayGoodBye()', () => {
        it('sayGoodBye should return => Good Bye', () => {
            let result = app.sayGoodBye();
            assert.equal(result, 'Good Bye');
        })
    })

    describe('addNumbers()', () => {
        it('addNumbers should return 7 which is sum of 2 + 5', () => {
            let result = app.addNumbers(2, 5);
            assert.equal(result, 7);
        })
    
        it('addNumbers should return a number above 10', () => {
            let result = app.addNumbers(5, 6);
            assert.isAbove(result, 10);
        })
    
        it('addNumbers should return type number', () => {
            let result = app.addNumbers(5, 6);
            assert.typeOf(result, 'number');
        })
    })

})