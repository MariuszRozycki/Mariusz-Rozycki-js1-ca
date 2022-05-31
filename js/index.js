const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
// console.log(id);


const url = 'https://api.openbrewerydb.org/breweries';
console.log(url);
const breweriesContainer = document.querySelector(".container-breweries");

async function getData() {

  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    for (let i = 0; i < results.length; i++) {
      let data = results[i];

      createHtml(data);
    }
  }
  catch (error) {
    console.log(error);
  }
}
getData();

function createHtml(data) {
  breweriesContainer.innerHTML += `<a class="card" href="details.html?id=${data.id}">
                                    <h2>Company: <span>${data.name}</span></h2>
                                   </a>`
}
