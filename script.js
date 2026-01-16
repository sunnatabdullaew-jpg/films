const search = document.querySelector(".search");
const cards = document.querySelector(".cards");
const loading = document.querySelector(".loading");

let api = `https://www.omdbapi.com/?s=shrek&apikey=3e658e50`;

getMovie(api);

async function getMovie(api) {
  loading.innerHTML = "Loading..."; 
  cards.innerHTML = "";
  try {
    const { data } = await axios.get(api);

    if (!data.Search) {
      loading.innerHTML = "";
      cards.innerHTML = "<p>Film topilmadi 😕</p>";
      return;
    }

    loading.innerHTML = "";

    data.Search.forEach(item => {
      cards.innerHTML += `
        <div class="card">
          <img src="${item.Poster !== "N/A" ? item.Poster : "no-image.png"}" alt="${item.Title}" class="image" />
          <h1 class="title">${item.Title}</h1>
          <p class="date">${item.Year}</p>
        </div>
      `;
    });
  } catch (error) {
    loading.innerHTML = "";
    cards.innerHTML = "<p>Xatolik yuz berdi ❌</p>";
    console.error(error);
  }
}

search.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  if (value) {
    api = `https://www.omdbapi.com/?s=${value}&apikey=3e658e50`;
    getMovie(api);
  }
});
