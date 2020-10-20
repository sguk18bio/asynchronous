/* 
fetch() is a built-in function in JavaScript.
fetch() takes an argument which is a resource we want to fetch.
That could be some endpoints of an API or some local resources.
fetch() returns a promise so we can use then() and catch() method.
Syntax: fetch(resource) 
*/

/* 
The fetch() is only rejected if we get network error.
If we have wrong url or something, we still get "Response", but its status it 404, which means "Not Found".
The "Response" object is something that the fetch() creates for us. It contains so many methods.
We can't see the data, it hides in the __proto__. In __proto__, there is one method called json().
Use response.json() to parse data.
response.json also returns a promise => Use then() and catch() method.
=> Take on the then() method => Benefits of chaining promises.
*/

fetch("../json/info.json")
  .then((response) => {
    console.log(`Resolved: `, response); // "response" is an object.
    return response.json();
  })
  .then((data) => {
    console.log(`Data: `, data);
  })
  .catch((err) => {
    console.log(`Rejected: `, err); // "err" is an object.
  });

// Use fetch() instead of an XMLHttpRequest object because it writes less code and easily maintain.
