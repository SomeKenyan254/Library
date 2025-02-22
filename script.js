const myLibrary = [];


function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
  

function addBook(title,author,pages,read){
    const newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
    
   
}
addBook('The Hobbit', 'J.R.R. Tolkien','300','isRead')
addBook('The Color of Law', 'Richard Rothstein','217','isRead')
addBook('The Trading Game', 'Gary Stevenson','256','isRead')
addBook('Infinite Game', 'Simon Sinek','400','isRead')
addBook('A new Revolution', 'Jeremy D Pokin','400','isRead')

function dispBook(){
    myLibrary.forEach((book)=>{
        console.log(book.title)
        /*console.log(book.author)
        console.log(book.pages)
        console.log(book.read)*/
        console.table(book)
    })
}
dispBook()

