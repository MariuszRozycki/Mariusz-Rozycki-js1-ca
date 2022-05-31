const displayError = (message = "Something is wrong!", error) => {
  console.log(error);
  return `<div class="error">                                                            
            <p>${message}</p>
          </div>`;
}