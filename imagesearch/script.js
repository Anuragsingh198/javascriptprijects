const accessKey = "lwrC322Ilib7lYb9HeSv6nHfhEm2dsHgjX6JO67eXNM";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("searchinput");
const searchResult = document.querySelector(".searchresult"); // Remove the dot (.) before "searchresult"
const showMore = document.getElementById("submitbutton");

let inputData = "";
let page = 1;

async function searchImage() {
  inputData = inputE1.value;
  console.log(inputData);
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results; // Correct the typo in "results"
  if (page === 1) {
    searchResult.innerHTML = "";
  }
  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("searchresult", "flex", "flex-col"); // Use "classList" instead of "classlist"
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResult.appendChild(imageWrapper); // Use "searchResult" instead of "imagewrapper" to append the element
  });
  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
}

formE1.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImage();
});

showMore.addEventListener("click", (event) => {
  event.preventDefault();
  searchImage();
});
