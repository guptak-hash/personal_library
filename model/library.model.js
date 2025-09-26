const {v4:uuid} = require('uuid');

// schema of book
class Library {
    constructor(title,author,genre,status="To Read"){
        // id=uuid();
       this.title=title;
       this.author=author;
       this.genre=genre;
       this.status=status;
    }
}

// store in memory
const library = [];

module.exports = {Library,library}