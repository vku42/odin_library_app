// Book Object
function Book(title, author, pages, read, cover) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.cover = cover;
}

const books = [
  new Book(
    "Cha Cha Chaudhary",
    "Pran Kumar",
    98,
    true,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BHvQhKx-kJZEblWrOsT3ft-bNDiBuT7PIg&s"
  ),
  new Book(
    "Nagraj",
    "Sanjay Gupta",
    100,
    false,
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a6f11bf-70cb-41e3-9d71-02bfc0c4e046/desbmd0-9fec876a-a926-4ac2-88e5-de9d1e2112ec.jpg/v1/fill/w_640,h_960,q_75,strp/nagraj__raj_comics_character__by_shahabkhan01_desbmd0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMWE2ZjExYmYtNzBjYi00MWUzLTlkNzEtMDJiZmMwYzRlMDQ2XC9kZXNibWQwLTlmZWM4NzZhLWE5MjYtNGFjMi04OGU1LWRlOWQxZTIxMTJlYy5qcGciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6FzryrVrO47CxC-Gs7lfC7J5f3KPMUdVi5Hc_xAcQBQ"
  ),
  new Book(
    "Shikari Shambhu",
    "Anant Pai",
    120,
    true,
    "https://upload.wikimedia.org/wikipedia/en/7/7f/Shikari_Shambhu.jpg"
  ),
  new Book(
    "Tenali Raman",
    "C.N. Subramanian",
    85,
    true,
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1470744318i/31383959.jpg"
  ),
  new Book(
    "Suppandi",
    "Ram Waeerkar",
    90,
    false,
    "https://m.media-amazon.com/images/I/61bBY6GLZmL._SY445_SX342_.jpg"
  ),
  new Book(
    "Pinki",
    "Pran Kumar",
    75,
    true,
    "https://m.media-amazon.com/images/I/51SwY1ZUUtL._SY445_SX342_.jpg"
  ),
  new Book(
    "Chandamama",
    "B. Nagi Reddy",
    150,
    true,
    "https://chandamama.page/stories/hindi/1971/06/dd61e9fa4_huaad0881cee75bd52ce2b975eea1f9b0a_229528_390x0_resize_q60_box.jpg"
  ),
  new Book(
    "Tinkle",
    "Anant Pai",
    110,
    false,
    "https://5.imimg.com/data5/HE/IO/MY-15425662/fcv-500x500.jpg"
  ),
  new Book(
    "Rajani",
    "Manoj Gupta",
    130,
    true,
    "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/11/03/Pictures/focus-superheroes-2_fddaf0a2-df60-11e8-a68b-5bb9980ab23e.jpg"
  ),
  new Book(
    "Bal Hanuman",
    "Rajiv Chilaka",
    95,
    false,
    "https://m.media-amazon.com/images/I/51Y7y2bCinL._SY445_SX342_.jpg"
  ),
  new Book(
    "Krishna",
    "Anant Pai",
    140,
    true,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCuAMZZj25gjHNA5OVuoT2CxORrhu_P0beHg&s"
  ),
  new Book(
    "Akbar Birbal",
    "Paramesh Shah",
    80,
    false,
    "https://m.media-amazon.com/images/I/91i13sTG3ZL._AC_UF1000,1000_QL80_.jpg"
  ),
];

const bookCard = document.querySelector(".book-card ul");
const addNewBook = document.querySelector(".new_book");

const popup_form = document.querySelector(".popup-form");
const closeFormBtn = document.getElementById("closeFormBtn");

const submit_btn = document.querySelector(".form-container form");

function makeCard(book) {
  const li = document.createElement("li");
  li.innerHTML = `
          <div class="book-info">
              <h3>${book.title}</h3>
              <p>by ${book.author}</p>
              <strong>Pages: ${book.pages}</strong>
              <button class="tog_btn">Read${book.read ? "✅" : "❌"}</button>
          </div>
      `;

  li.style.backgroundImage = `url(${book.cover})`;
  li.style.backgroundSize = "cover";
  li.style.backgroundPosition = "center";
  li.classList.add("book-item");

  bookCard.appendChild(li);
}

window.onload = function () {
  for (let book of books) {
    makeCard(book);
  }
};

addNewBook.addEventListener("click", () => {
  popup_form.style.display = "flex";
});

closeFormBtn.addEventListener("click", () => {
  popup_form.style.display = "none";
});

submit_btn.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = new Book();
  formData.forEach((value, key) => {
    if (key === "read") {
      value = "on" ? true : false;
    }
    data[`${key}`] = value;
  });
  books.push(data);
  makeCard(data);
  submit_btn.reset();
});

bookCard.addEventListener("click", (event) => {
  if (event.target.classList.contains("tog_btn")) {
    const button = event.target;
    if (button.style.backgroundColor === "red") {
      button.style.backgroundColor = "green";
      button.innerText = "Read ✅";
    } else {
      button.style.backgroundColor = "red";
      button.innerText = "Read ❌";
    }
  }
});
