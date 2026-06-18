const dialog = document.getElementById("add-book");
const form = document.getElementById("form-add");
const btnAdd = document.getElementById("btn-add");
const closeBtn = document.getElementById("close");
const booksList = document.querySelector(".books");

const books = [];

class Book {
    constructor() {
        this.id = crypto.randomUUID();
        this.title = document.getElementById("title").value;
        this.author = document.getElementById("author").value;
        this.page = document.getElementById("page").value;
        this.read = document.querySelector("input[name='read']:checked").value == "true" ? true : false;
    }

    createBook() {
        return `
            <div class="book" data-read="${this.read}">
                <h3 class="title">${this.title}</h3>
                <p>Author: ${this.author}</p>
                <p>${this.page} pages</p>
                <p class="read-status">${this.read == true ? "Already read" : "Not read yet"}</p>
            </div>
        `
    }
}

function createFirstBook(title, author, page, read) {
    const book = new Book();

    book.title = title;
    book.author = author;
    book.page = page;
    book.read = read;
    books.push(book);
}

createFirstBook("The Hobbit", "J.R.R. Tolkien", 295, false);
createFirstBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 305, true);

btnAdd.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const book = new Book();

    books.push(book);
    booksList.innerHTML = '';
    books.forEach(book => {
        booksList.innerHTML += book.createBook();
    })
    dialog.close();
})
