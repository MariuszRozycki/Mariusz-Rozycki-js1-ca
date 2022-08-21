One among many study assignments. I had to find some public, free to use API (I worked with American brewery API).
I had to fetch an array of results and fetch a single result using an ID, name or other property.
The App consists of index.html, details.html and contact.html. 
In index.html (connected to index.js) I made a call to API URL. Loop throught the results and created HTML for each result. I had to linked each result to a details.html and passed a parameter in the query string to that page. It was necessary to catch any errors and display a message on the page if an error occured.

In details.html I had to retrive the ID, name and others parameter from the query string. After retriving parameter I had to add it to API URL in format requred by API. I made API call using URL to create.
I displayedmore then 3 different properties from recived JSON on this page.
I had to set title of the HTML page to be one of the property value.
As in index.html I had to catch any errors and display a message on the page if an error occured.

I created form in contact.html with following inputs and validation rules:
- name - required
- subject - must have a value with a minimum length of 10
- email - formatted like an email address
- address - must have a value with a minimum length of 25

I wrote code to validate the input. If any of the inputs fail validation display an error message for the relevant input.
