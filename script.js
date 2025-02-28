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
        const container = document.querySelector('.display')
        container.innerHTML= "";
        myLibrary.forEach((book)=>{
            const content = document.createElement('div')
            content.classList = 'book-card';
            content.textContent = `${book.title} by ${book.author}`;
            container.appendChild(content)
        })
}
dispBook()


let btn = document.querySelector('.button button')
btn.addEventListener("click",dispForm)

let clsBtn = document.querySelector('.submit button')
clsBtn.addEventListener("click",closeForm)

function dispForm(){
    const showForm = document.querySelector('#sidebar')
    showForm.style.display = "block"
    

}
function closeForm(event){
   
}


