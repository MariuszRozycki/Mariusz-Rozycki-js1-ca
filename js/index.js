const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = 'https://api.openbrewerydb.org/breweries';
const container = document.querySelector(".container");

async function getData() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    container.innerHTML = `<h1>List of breweries:</h1>`;

    for (let i = 0; i < results.length; i++) {
      let data = results[i];
      console.log(results);
      createHtml(data);
    }
  }
  catch (error) {
    container.innerHTML = displayError() + `<p class="error">${error}</p>`;
  }
}
getData();

function createHtml(data) {
  container.innerHTML += `
                          <div onclick="location.href='details.html?id=${data.id}'" class="card">
                            <a>
                              <h2>Company: <span>${data.name}</span></h2>
                              <p>Street: ${data.street}</p>
                              <a class="phone" href="tel:${data.phone}">Phone: ${data.phone} call us!</a>
                            </a>
                          </div>`;
}