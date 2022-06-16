const api_key="7eda2dd9df64fe79bea81a1776e4212a"
const base_url="https://api.openweathermap.org/data/2.5"

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}	

// date and time //
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
lat = "",
log = "",
$(document).on("click", ".search-button", () =>{
    let a = $("#newCity").val();
    if (a !="") {
        cityName= toTitleCase(a);
    }
    getWeather(cityName);
});
getWeather = (x) => {
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${x}`,
        method: "GET",
    }).then((t) => {
        $(".city").text(t.name);
        $(".w-icon").attr(
            "src",
            `http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`
        );
        $(".w-temp").html(
            Math.round(1.8 * (t.main.temp - 273.15) + 32) +
            "<sup style='font-size:.5em;'>˚F</sup>"
        );
        $("humid").text(t.main.humidity);
        $("windSpeed").text(t.wind.speed);
        lat = t.coord.lat;
        lon = t.coord.lon;
        getUV(lat, lon);
        fiveDays(lat, lon);
    });
}
