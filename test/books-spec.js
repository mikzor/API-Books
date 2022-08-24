//const should = require('chai').should(); 
const apiResponse = require ('../APIs/random-api');
const { expect, assert } = require ('chai');

describe('API-Books', async function() {
    it.only('Should GET my book', async function() {
        const getBook = await apiResponse.requestTheBook();
        expect(getBook.status).to.equal(200);
        console.log(getBook.data);
    });

    it('Should POST a new book', async function() {
        const getBook = await apiResponse.post();

        console.log(getBook.data.id);
    });

    it('Should PUT changed to the book', async function() {
        const getBook = await apiResponse.put();

        console.log(getBook.data);
    });

    it.skip('Request should delete the book', async function() {
        const emptyBook = await apiResponse.delete();
        should.equal(emptyBook.satus, 404);
        console.log(emptyBook.status);
    });

});