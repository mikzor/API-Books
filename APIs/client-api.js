const axios = require( 'axios'); 
const baseUrl = 'https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/';
const bookID = 'c99c61db5ef22262a731b207190fbdd6';
const enterBook = {title: "Hello", author: "Apples"};
const updateTitle = {title: "Thunder", author: "Apples"};
const deleteBookItem ='a060e935b1d216256d61101c9056e52c';


class Client {
    async get(title){
        const book = await axios.get(baseUrl + title);

        return book;
    }

    async post(){
        const newBook = await axios.post(baseUrl + 'books', enterBook);

        return newBook;
    }

    async put(){
        const bookUpdate = await axios.put(baseUrl + '3e830dc8592e6ea913c4ac4032670a5c', updateTitle);
        return bookUpdate;
    }

    async delete(){
        const deleteBook = await axios.delete(baseUrl + deleteBookItem);
        return deleteBook;
    }

}

module.exports = new Client();