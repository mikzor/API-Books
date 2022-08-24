const { expect, assert } = require ('chai');
const Client = require ('../APIs/client-api.js');


class Random {
    async createNewpost(){
        const createPost = await Client.post();
        return createPost;
    }
    //GET
    async requestTheBook(){
        const requestBook = await Client.get();
      //  expect(requestBook.status).to.equal(200);
      console.log(requestBook);
        return requestBook;
    }

    async updateTheBook(){
        const bookUpdate = await Client.put();
        assert.equal(bookUpdate.data.title, "Thunder");
        return bookUpdate;
    }

    async deleteTheBook(){
        const deleteBook = await Client.delete(baseUrl + deleteBookItem);

        return deleteBook;
    }

}

module.exports = new Random();