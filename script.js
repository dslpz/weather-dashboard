const api_key="7eda2dd9df64fe79bea81a1776e4212a"
const base_url="https://api.openweathermap.org/data/2.5"

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}	


const interval = setInterval(function () {
    $(".dateTime").text(new Date ());
}, 1000); 

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function (match){
        return match.toUpperCase();
    });
}
//get value from search city button//
let cityName= "";
$(document).on("click", ".search-button", () =>{
    let a = $("#newCity").val();
    if (s !="") {
        cityName= toTitleCase(a);
    }
    getWeather(cityName);
});
getWeather = (x) => {
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${x}`,
        method: "GET",
    }).then((t) => {
        console.log(t);
    });
    };

