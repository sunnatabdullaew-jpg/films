let api = `http://www.omdbapi.com/?s=shrek&apikey=3e658e50`;
const search = document.querySelector(".search");
const cards = document.querySelector(".cards");
const loading = document.querySelector(".loading");

getMovie(api);

async function getMovie(api) {
  loading.innerHTML = "";
  cards.innerHTML = "";
  try {
    const data = await axios.get(api);
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
  } catch (error) {
    console.error(error);
  }
}

search.addEventListener("change", (e) => {
  const value = e.target.value.trim();
  if (value) {
    api = `http://www.omdbapi.com/?s=${value}&apikey=3e658e50`;
    getMovie(api);
  }
});
