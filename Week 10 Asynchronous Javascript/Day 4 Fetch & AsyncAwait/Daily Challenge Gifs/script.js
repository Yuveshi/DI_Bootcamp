const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const gifForm = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

gifForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchQuery = searchInput.value.trim();
  if (searchQuery === "") return;

  try {
    const gifUrl = await fetchRandomGif(searchQuery);
    displayGif(gifUrl, searchQuery);
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});

async function fetchRandomGif(searchQuery) {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchQuery}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.data.images.original.url;
}

function displayGif(gifUrl, category) {
  const gifElement = document.createElement("div");
  gifElement.innerHTML = `
        <img src="${gifUrl}" alt="${category}">
        <button class="deleteBtn">Delete</button>
    `;
  gifContainer.appendChild(gifElement);

  const deleteBtn = gifElement.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    gifElement.remove();
  });
}