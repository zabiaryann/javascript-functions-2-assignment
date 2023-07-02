//Below you will find a (lengthy) array of objects pertaining to popular books
// /Your job is to write the function `filterByGenre()` that:
// - Takes this array of books and a genre (as a string) as parameters
// - Then uses the .filter() method to return a filtered array of books containing that genre.

//Write filterByGenre(books, genre) below here:
function filterByGenre(books, genre) {
  return books.filter(book => book.genre === genre);
}

const books = [
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "mystery",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "romance",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "sci-fi",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "mystery",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "romance",
  },
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    genre: "sci-fi",
  },
  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    genre: "mystery",
  },
  {
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    genre: "romance",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "sci-fi",
  },
  {
    title: "The Big Sleep",
    author: "Raymond Chandler",
    genre: "mystery",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    genre: "romance",
  },
];
// /Your job is to write the function `filterByGenre()` that:
let 

