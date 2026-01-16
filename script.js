let api = `http://www.omdbapi.com/?s=shrek&apikey=3e658e50`;
const search = document.querySelector(".search");
const cards = document.querySelector(".cards");
const loading = document.querySelector(".loading");

try {
  getMovie(api);
} catch (error) {
  throw new Error(error);
}

function getMovie(api) {
  loading.innerHTML = "";
  cards.innerHTML = "";
  axios.get(api).then((data) => {
    console.log(data.data);
    const request = data.data;
    request.Search.map((item, index) => {
      cards.innerHTML += `
      <div class="card">
      <img src=${item.Poster} alt="" class="image" />
    <h1 class="title">${item.Title}</h1>
    <p class="date">${item.Year}</p>
      </div>
    
  `;
    });
  });
}

search.addEventListener("change", (e) => {
  const value = e.target.value.trim();
  if (value) {
    api = `http://www.omdbapi.com/?s=${value}&apikey=3e658e50`;
    getMovie(api);
  }
});