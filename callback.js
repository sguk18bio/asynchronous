const getData = (url, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(undefined, JSON.parse(xhr.responseText));
    } else if (xhr.readyState === 4) {
      callback(xhr.statusText, undefined);
    }
  });

  xhr.open("GET", url);
  xhr.send();
};

/* This is a callback function.
Callback convention: The err variable is always the first param, the data variable is the second one.
Syntax: 
  (err, data) => {
    if (err) {
      throw err;
    }
    else {
      // Do something.
    }
  };
*/

// Example.
/* 
getData("./info.json", (err, data) => {
  if (err) throw err;
  else console.log(`Data: `, data);
}); 
*/

// Callback-hell = callback in callback in callback ...
console.log("Callback-hell example.");

getData("../json/info.json", (err, data) => {
  if (err) throw err;
  else {
    console.log(`Data: `, data); // Data in info.json.
    getData("../json/course.json", (err, data) => {
      if (err) throw err;
      else {
        console.log(`Data: `, data); // Data in course.json.
      }
    });
  }
});
