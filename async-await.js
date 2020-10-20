/* 
async, await are 2 keywords which allow us chain promises together clean and more readable way.
Put "async" keyword before the () => this function becomes asynchronous.
Use "await" keyword to chain promises.
Whenever we call an asynchronous function, it always returns a promise.
*/

/*  Example:
const demo = async () => {};

const test = getData();
console.log(test); // Promise.
*/

/* 
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
*/

const getData = async () => {
  const response = await fetch("../json/info.json");
  const data = await response.json();

  return data;
};

getData() // Also a promise.
  .then((data) => console.log(`Resolved: `, data))
  .catch((err) => console.log(`Rejected: `, err));

// Throw your own error.
const getInfo = async () => {
  const response = await fetch("../json/courses.json"); // Wrong url.

  // Check the status code.
  if (response.status !== 200) {
    throw new Error(`Cannot fetch info.`); // Error object is thrown when we get an error and "jump" to catch() method.
  }

  const info = await response.json();

  return info;
};

getInfo()
  .then((data) => console.log(`Resolved: `, data))
  .catch((err) => console.log(`Rejected: `, err.message));
