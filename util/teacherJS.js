if (testBookFilterer()) {
  const form = document.querySelector("form");
  const results = document.querySelector("#results");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const genre = form.genre.value;
    const filteredBooks = filterByGenre(books, genre);
    const totalBooks = filteredBooks.length;

    let html = `<p>Found ${totalBooks} books.</p>`;

    if (totalBooks > 0) {
      html += `<ul>`;
      filteredBooks.forEach((book) => {
        html += `<li>${book.title} by ${book.author}</li>`;
      });
      html += `</ul>`;
    }

    results.innerHTML = html;
  });
} 

// Define tests for the numberAdder function
function testBookFilterer() {
  const booksSubset = [
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
  ];
  try {
    let result = filterByGenre(booksSubset, "mystery");
    if (result.length !== 2 || typeof result === undefined) {
      throw new EvalError(
        "Try looking at your function to see if it is filtering properly. Make sure you are returning the filtered books as well"
      );
    }
    if (result[0].genre !== "mystery") {
      throw new Error("Not returning the right type of genre");
    }
    return true;
  } catch (e) {
    if (e instanceof ReferenceError) {
      alert(
        "Please define the function 'filterByGenre' If you defined the function, please ensure \
        that it is spelled correctly and is capitalized properly. It should have 2 parameters: books (the predefined array of books), and genre \
        a string that you use to filter the array of books"
      );
      return false;
    }
    if (e instanceof EvalError) {
      alert(e.message);
      return false;
    }
  }
}
