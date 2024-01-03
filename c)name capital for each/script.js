\\print the following details name, capital, flag using for Eachfunction


var request = new XMLHttpRequest();
request.open("GET", " https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    result.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    });
}