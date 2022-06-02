const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
// console.log(id);


const url = 'https://api.openbrewerydb.org/breweries';
console.log(url);
const container = document.querySelector(".container");

async function getData() {

  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    container.innerHTML = `<h1>List of breweries:</h1>`;

    for (let i = 0; i < results.length; i++) {
      let data = results[i];

      createHtml(data);
    }
  }
  catch (error) {
    container.innerHTML = displayError() + `<p class="error">${error}</p>`;
  }
}
getData();

function createHtml(data) {
  container.innerHTML += `<a class="card" href="details.html?id=${data.id}">
                            <h2>Company: <span>${data.name}</span></h2>
                          </a>`
}
