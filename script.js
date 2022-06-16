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