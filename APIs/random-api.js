const axios = require( 'axios'); 
const baseUrl = 'https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/';
const { expect, assert } = require ('chai');
const bookNum = 'c99c61db5ef22262a731b207190fbdd6';
const deleteBookItem ='a060e935b1d216256d61101c9056e52c';
const enterBook = {title: "Hello", author: "Apples"};
const updateTitle = {title: "Thunder", author: "Apples"};


class Random {
    async post(){
        const newBook = await axios.post(baseUrl + 'books', enterBook);
        return newBook;
    }
    async get(){
        const book = await axios.get(baseUrl + bookNum);
        expect(book.status).to.equal(200);
        return book;
    }

    async put(){
        const bookUpdate = await axios.put(baseUrl + '3e830dc8592e6ea913c4ac4032670a5c', updateTitle);
        assert.equal(bookUpdate.data.title, "Thunder");
        return bookUpdate;
    }

    async delete(){
        const deleteBook = await axios.delete(baseUrl + deleteBookItem);
        return deleteBook;
    }

}

module.exports = new Random();