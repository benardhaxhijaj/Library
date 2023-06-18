let myLibrary = [];
const submitBtn = document.getElementById("submitbtn");
const addBookBtn = document.getElementById("addbookbtn");
const main = document.getElementById("main");
const removeBtn = document.getElementById("removebtn");

function Book(title, author, pages, readstatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readstatus = readstatus;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readstatus = document.getElementById("readstatus").checked;

  const newBook = new Book(title, author, pages, readstatus);

  myLibrary.push(newBook);

  cardContainer(newBook);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("readstatus").checked = false;
}

addBookBtn.addEventListener("click", () => {
  main.classList.add("active");
});

removeBtn.addEventListener("click", () => {
  main.classList.remove("active");
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function cardContainer(book) {
  const card = document.createElement("div");
  card.classList.add("book-card");

  const avatar = document.createElement("div");
  avatar.classList.add("avatar");
  avatar.style.backgroundColor = "#DADADA";
  avatar.textContent = book.title;
  card.appendChild(avatar);

  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = `By: ${book.author}`;
  card.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = `${book.pages} pages`;
  card.appendChild(pages);

  const readstatus = document.createElement("button");
  readstatus.classList.add("readstatus");
  readstatus.textContent = book.readstatus ? "Read" : "Not Read";
  readstatus.style.backgroundColor = book.readstatus ? "#90EE90" : "#FAA0A0";
  readstatus.addEventListener("click", () => {
    if ((book.readstatus = !book.readstatus)) {
      readstatus.textContent = "Read";
      readstatus.style.backgroundColor = "#90EE90";
    } else {
      readstatus.textContent = "Not Read";
      readstatus.style.backgroundColor = "#FAA0A0";
    }
  });

  const removeBook = document.createElement("button");
  removeBook.classList.add("removebook");
  removeBook.textContent = "Remove";
  removeBook.addEventListener("click", () => {
    myLibrary.removeChild(card);
  });
  card.appendChild(removeBook);

  card.appendChild(readstatus);

  const myLibrary = document.getElementById("bookcontainer");
  myLibrary.appendChild(card);
}
