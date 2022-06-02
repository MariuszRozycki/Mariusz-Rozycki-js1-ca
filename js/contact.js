const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const userAddress = document.querySelector("#user-address");
const userAddressError = document.querySelector("#user-address--error");
const message = document.querySelector("#form-message");

function validateForm(event) {
  event.preventDefault();

  // userName
  if (checkLength(userName.value, 0) === true) {
    nameError.style.display = "none";
  }
  else {
    nameError.style.display = "block";
  }

  // subject
  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  }
  else {
    subjectError.style.display = "block";
  }

  // email
  if (checkEmail(email.value) === true) {
    emailError.style.display = "none";
  }
  else {
    emailError.style.display = "block";
  }

  // userAddress
  if (checkLength(userAddress.value, 24) === true) {
    userAddressError.style.display = "none";
  }
  else {
    userAddressError.style.display = "block";
  }
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

if (validateForm) {
  message.innerHTML = `Your form is sent!`;
}
