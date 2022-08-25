const { expect, assert } = require ('chai');
const Client = require ('../APIs/client-api.js');
const updateTitle = {title: "Easy", 
                     author: "Peezy"
                    };

class Random {
    //POST
    async createBook(titleName, authorName){
        const createPost = await Client.post({ title: titleName, author: authorName});
        expect(createPost.status).to.equal(201);

        return createPost.data;
    }
    //GET
    async requestTheBook(bookId){
        const requestBook = await Client.get(bookId);
        expect(requestBook.status).to.equal(200);

        return requestBook.data;
    }

        // ALL GET
        async requestAllTheBooks(){
            const requestAllBook = await Client.allget();
           // expect(requestBook.status).to.equal(200);
    
           return requestAllBook.data;
        }
    //PUT
    async updateTheBook(bookId){
        const bookUpdate = await Client.put(bookId, updateTitle);
        expect(bookUpdate.status).to.equal(200);

        return bookUpdate.data;
    }

    async deleteTheBook(bookId){
        const deleteBook = await Client.delete(bookId);

        return deleteBook.data.message;
    }

}

module.exports = new Random();