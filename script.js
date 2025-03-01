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
       container.innerHTML= "";
        myLibrary.forEach((book,index)=>{
            const content = document.createElement('div')
            content.classList = 'book-card';
            
            content.textContent = `${book.title} by ${book.author}`;
            container.appendChild(content)

            const dltBtn = document.createElement('button')
            dltBtn.textContent = 'X'
            dltBtn.classList.add('delete-btn');
            dltBtn.setAttribute('data-index',index)


            dltBtn.addEventListener('click', (e) => {
                const bookIndex = e.target.getAttribute('data-index');
                console.log(bookIndex)
                myLibrary.splice(bookIndex,1); 
                dispBook()
                
            })
            content.appendChild(dltBtn)
          
            


        })
       
}


const container = document.querySelector('.display')

let btn = document.querySelector('.button button')
btn.addEventListener("click",dispForm)

let clsBtn = document.querySelector('.submit button')
clsBtn.addEventListener("click",closeForm)

function dispForm(){
    const showForm = document.querySelector('#sidebar')
    showForm.style.display = "block"
    

}
function closeForm(event){
   event.preventDefault();
   const title = document.querySelector('#title').value;
   const author = document.querySelector('#author').value;
   const pages = document.querySelector('#pages').value;
   const read = document.querySelector('#read').value;
   addBook(title,author,pages,read)
   dispBook()
}
dispBook()







