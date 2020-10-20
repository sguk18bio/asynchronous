/* 
const getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve(`Successfully get data`); // resolve() invoked when the promise successfully gets data.
    reject(`Error`); // reject() invoked when the promise gets the error.
  });
}; 
*/

/* 
Now getSomething() becomes a promise
When a function becomes a promise, it can take on then() method.
The then() method takes a callback functions as params.
When you invoke the resolve() method in a promise, it fires the callback in then() method.
When you invoke the reject() method in a promise, it fires the callback in then() method.
*/

/* This will take 2 callbacks as 2 arguments.
  getSomething().then(
    (data) => {
      console.log(data); // This will invoke when the resolve() method is invoked.
    },
    (err) => {
      console.log(err); // This will invoke when the reject() method is invoked.
    }
  ); 
*/
/* We can write this in a different way.
  getSomething()
    .then((data) => {
      console.log(`Data: `, data);
    })
    .catch((err) => {
      console.log(`Error: `, error); // This will invoke when the reject() method is invoked.
    });
*/

const getData = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        resolve(data);
      } else if (xhr.readyState === 4) {
        reject(`Error occurred.`);
      }
    });

    xhr.open("GET", url);
    xhr.send();
  });
};

getData("../json/info.json")
  .then((data) => {
    console.log(`Promise resolved: `, data);
  })
  .catch((err) => {
    console.log(`Promise rejected: `, err);
  });

// Chaining promises.
/* 
The benefit of promises is we only need to catch() the error once.
Assume that we 2 promises, the 1st gets an error and the 2nd is resolved.
The 1st promise will "jump" to the catch() method, while the 2nd one logs the data.
Example:
  getData("../json/infos.json") // Wrong url => jump to catch().
    .then((data) => {
      console.log(`Promise 1 resolve: `, data);
      return getData("../json/course.json");
    })
    .then((data) => console.log(`Promise 2 resolved: `, data)) // Log data to console normally.
    .catch((err) => console.log(`Promise rejected: `, err));
*/

getData("../json/info.json")
  .then((data) => {
    console.log(`Promise 1 resolve: `, data);
    return getData("../json/course.json"); // This will return a promise
  })
  .then((data) => console.log(`Promise 2 resolved: `, data))
  .catch((err) => console.log(`Promise rejected: `, err));
