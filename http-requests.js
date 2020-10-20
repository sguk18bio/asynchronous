// Create an XMLHttpRequest.
const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  /* readyState: 4 => DONE
     stats: 200 => OK
  */

  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText)); // parse JSON to JS object.
  } else {
    console.log(xhr.statusText); // 404: Not Found.
  }
});

xhr.open("GET", "../json/info.json");
xhr.send();
