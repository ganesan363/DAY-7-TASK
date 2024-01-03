\\get all the countries with a population of less than 2lakhs using filter function


var request = new XMLHttpRequest();
request.open("GET", " https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result= JSON.parse(request.response);
    const pop = result.filter((element) => {
        return element.population < 20000;
    })
    
    console.log(pop);
}