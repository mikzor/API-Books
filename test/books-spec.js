should = require('chai').should(); 
const booksApi = require ('../APIs/random-api');
const { expect, assert } = require ('chai');
const author = 'Grand';
const title =  'Design';

describe('API-Books', async function() {
    it('Should POST my book', async function() {
        const newBook = await booksApi.createBook(title, author);
        expect(newBook.author).to.equal(author);
        expect(newBook.title).to.equal(title);
        expect(newBook.id.length).to.equal(32);
        return newBook;
    });

    it('Should GET a new book', async function() {
        const newBook = await booksApi.createBook(title, author);
        const getBook = await booksApi.requestTheBook(newBook.id);
        newBook.title.should.be.a('string');
        getBook.author.should.be.a('String');
        return newBook;
        
    });

    it('Should ALL GET a new book', async function() {
        const getAllBooks = await booksApi.requestAllTheBooks();
        return getAllBooks;
    
    });

    it('Should PUT changed to the book', async function() {
        const newBook = await booksApi.createBook(title, author);
        const getBook = await booksApi.updateTheBook(newBook.id);
        expect(getBook.id.length).to.equal(32);
       return getBook;
    });

    it('Request should DELETE the book', async function() {
        const newBook = await booksApi.createBook(title, author);
        const emptyBook = await booksApi.deleteTheBook(newBook.id);
        expect(emptyBook).to.equal('Book was removed successfully');
    });

});