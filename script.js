
class Library{
    constructor(){
        this.myLibrary = [];
    }
    createBook(title, author, pages, read) {
        return {
            title,
            author,
            pages,
            read: read === 'isRead',
            bookStatus() {
                this.read = !this.read;
            }
        };
    }

    addBook(title,author,pages,read){   
       const newBook = this.createBook(title,author,pages,read)
        this.myLibrary.push(newBook)
        this.dispBook();

    }
    dispBook(){
        const container = document.querySelector('.display')
        container.innerHTML= "";
         this.myLibrary.forEach((book,index)=>{
             const content = document.createElement('div')
             content.classList = 'book-card';
             
             content.textContent = `${book.title} by ${book.author}`;
           
 
             //Remove book from library
             const dltBtn = document.createElement('button')
             dltBtn.textContent = 'X'
             dltBtn.classList.add('dlt-btn');
             dltBtn.setAttribute('data-index',index)
 
 
             dltBtn.addEventListener('click', (e) => {
                 const bookIndex = e.target.getAttribute('data-index');
                this.myLibrary.splice(bookIndex,1); 
                 this.dispBook()
                 
             })
             content.appendChild(dltBtn)
             
                 const statBtn = document.createElement('button')
                 statBtn.textContent = book.read ? ' Read' : 'Unread';
                 statBtn.classList.add('tgl-btn');
                 statBtn.setAttribute('data-index', index);
 
                 statBtn.addEventListener('click', (e) => {
                 const bookIndex = e.target.getAttribute('data-index');
                 this.myLibrary[bookIndex].bookStatus();
                 this.dispBook(); })
                 content.appendChild(statBtn)
             
             container.appendChild(content)
            })
        }
        dispForm() {
            const showForm = document.querySelector('#sidebar');
            showForm.style.display = "block";
        }
    
        updateLib() {
            const title = document.querySelector('#title').value;
            const author = document.querySelector('#author').value;
            const pages = document.querySelector('#pages').value;
            const read = document.querySelector('#read').checked ? 'isRead' : 'notRead';
    
            this.addBook(title, author, pages, read);
    
            const showForm = document.querySelector('#sidebar');
            showForm.style.display = "none";
        }
    }

//Create a new library
const library = new Library();

library.addBook('The Hobbit', 'J.R.R. Tolkien','300','isRead')
library.addBook('The Color of Law', 'Richard Rothstein','217','isRead')
library.addBook('The Trading Game', 'Gary Stevenson','256','isRead')
library.addBook('Infinite Game', 'Simon Sinek','400','isRead')
library.addBook('A new Revolution', 'Jeremy D Pokin','400','isRead')

//Event Listeners
const btn = document.querySelector('.addbook')
btn.addEventListener("click",() => library.dispForm())

let clsBtn = document.querySelector('.submit button')
clsBtn.addEventListener("click",() => library.updateLib())


//Add books to library from user input






