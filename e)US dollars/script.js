//print the country which uses US dollar as currency


var request = new XMLHttpRequest();
request.open("GET", " https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    var currency = result.filter((element) => {
        for (let key in element.currencies) {
            if (element.currencies[key].code === "USD") {
                return element;
            }
        }
    })
    console.log(currency);
}