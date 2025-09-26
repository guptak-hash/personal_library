const {v4:uuid} = require('uuid');

class Library {
    constructor(title,author,genre,status="To Read"){
        // id=uuid();
       this.title=title;
       this.author=author;
       this.genre=genre;
       this.status=status;
    }
}

const library = [];

module.exports = {Library,library}