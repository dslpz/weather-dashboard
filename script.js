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

    getUV = (a, b) => {
        $.ajax({
          url: `https://api.openweathermap.org/data/2.5/onecall?lat=${a}&lon=${b}&eclude=hourly,daily&appid=${API_KEY}`,
          method: "GET",
        }).then((y) => {
          $(".uvIndex").text(y.current.uvi);
        });
        };
        
        fiveDays = (c, d) => {
        $.ajax({
          url: `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lat=${c}&lon=${d}`,
          method: "GET",
        }).then((t) => {
          for (let i = 0; i <= 32; i += 8) {
            let aa = t.list[i];
            let dt = new Date(aa.dt * 1000);
            let bb = dt.toDateString() + "<br />";
            let cc = `<img src = 'http://openweathermap.org/img/wn/${aa.weather[0].icon}@2x.png' /><br />`;
            let dd =
              Math.round(1.8 * (aa.main.temp - 273.15) + 32) +
              "<sup style='font-size:.5em;'>˚F</sup>";
            let ee = $("<div>").append(bb).append(cc).append(dd);
            $(".fiveDays").append(ee);
          }
        });
        };
        
        $(document).ready(() => {
        getWeather("Houston");
        });