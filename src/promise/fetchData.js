let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const fetchData = (url_api) => {
return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true); //aqui el true sirve para activar el asincronsimo//
    xhttp.onreadystatechange = (() => {
        if (xhttp.readyState === 4) { //uso el === porque quiero que el valor y el tipo sean el mismo elemento//
          (xhttp.status === 200)
            ? resolve(JSON.parse(xhttp.responseText))
            : reject(new Error("error", url_api))
        }    
    });
   xhttp.send(); 
});
}

module.exports = fetchData;