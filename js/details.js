const detailContainer = document.querySelector(".details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log("id:", id);

const url = "https://api.openbrewerydb.org/breweries/" + id;
console.log("url:", url);



async function fetchBrewery() {

  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);
    document.title = details.name;
    detailContainer.innerHTML = `<h1>Brewery details: </h1>`;
    createHtml(details);
  }
  catch (error) {
    detailContainer.innerHTML = displayError() + `<p class="error">${error}</p>`;
  }
}
fetchBrewery();

function createHtml(details) {
  if (details.website_url) {
    detailContainer.innerHTML += `<div class="details-item">
                                  <h2>${details.name}</h2>
                                  <p>Brewery type: ${details.brewery_type}</p>
                                  <p>City: ${details.city}</p>
                                  <p>Country: ${details.country}</p>
                                  <p>State: ${details.state}</p>
                                  <p>Postal code: ${details.postal_code}</p>
                                  <a href="${details.website_url}">Website: ${details.website_url}</a>
                                  </div>`;
  }
  if (details.website_url === null) {
    detailContainer.innerHTML += `<div class="details-item">
                                 <h2>${details.name}</h2>
                                 <p>Brewery type: ${details.brewery_type}</p>
                                 <p>City: ${details.city}</p>
                                 <p>Country: ${details.country}</p>
                                 <p>State: ${details.state}</p>
                                 <p>Postal code: ${details.postal_code}</p>
                                 </div>`
  }

}