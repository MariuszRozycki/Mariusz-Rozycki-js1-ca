const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const userAddress = document.querySelector("#user-address");
const userAddressError = document.querySelector("#user-address--error");
const message = document.querySelector("#message");
const itemDetails = document.querySelector(".item-details");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://api.openbrewerydb.org/breweries/" + id;

async function fetchBrewery() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    document.title = `Contact ${details.name}`;
    itemDetails.innerHTML = `<a href="./details.html?id=${details.id}">Back to: ${details.name} details</a>`;
    formCorrectlyValidated(details);
  }
  catch (error) {
    console.log("error z cath:", error);
    message.innerHTML = displayError() + `<p class="error">${error}</p>`;
  }
}
fetchBrewery();

function validateForm(event) {
  event.preventDefault();
  if (checkLength(userName.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 9)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(userAddress.value, 24)) {
    userAddressError.style.display = "none";
  } else {
    userAddressError.style.display = "block";
  }
  fetchBrewery();

};

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  }
  else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", validateForm);

function formCorrectlyValidated(details) {
  if (checkLength(userName.value, 0) && (checkLength(subject.value, 9)) && (checkEmail(email.value)) && (checkLength(userAddress.value, 24))) {
    message.innerHTML = `<p class="success">Your message to ${details.name} has been sent.</p>`;
    form.reset();
  }
}