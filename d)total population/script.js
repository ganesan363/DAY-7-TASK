\\print the total population of country using reduce function


var request = new XMLHttpRequest();
request.open("GET", " https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    var total = result.reduce((acc, curr) => {
        return acc + curr.population;
    }, 0);
    console.log(total);
}