const axios = require( 'axios'); 
const baseUrl = 'https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/';

class Client {
    async post(isMyBook){
        const newBook = await axios.post(baseUrl + 'books', isMyBook);
        return newBook;
    }

    async get(bookId){
        const response = await axios.get(baseUrl + bookId);
        return response;

    }

    async allget(){
        const response = await axios.get(baseUrl + 'books');
        return response;

    }
    async put(bookId, updatedTitle){
        const bookUpdate = await axios.put(baseUrl + bookId, updatedTitle);
        return bookUpdate;
    }

    async delete(bookId){
        const deleteBook = await axios.delete(baseUrl + bookId);
        return deleteBook;
    }

}

module.exports = new Client();