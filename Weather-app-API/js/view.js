"use strict";

function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="conatiner">
        <div class="content">
            <h1>Været idag:</h1>
            ${printWeatherData()}
            </div>
            <embed class="weatherMap" type="text/html" src="https://www.yr.no/nb/innhold/1-2442956/card.html" width="500" height="200">
    </div>
    `;
    model.weather = '';
}

function printWeatherData() {
    for (let i = 0; i < 3; i++) {
        model.weather += `
        <div class="weatherInformation">
            <h1><input type="image" src="images/${model.weatherData.symbol[i]}.svg" height=40> ${model.dateAndTime[i]}</h1>
            <li>grader: ${model.weatherData.air_temperature = model.weatherData.data[model.timeIndex[i]].data.instant.details.air_temperature + ' ' + model.weatherData.meta.air_temperature}</li>
            <li>sjanse for regn: ${model.weatherData.relative_humidity = model.weatherData.data[model.timeIndex[i]].data.instant.details.relative_humidity + ' ' + model.weatherData.meta.relative_humidity}</li>
            <li>vindretning: ${printDirections(model.timeIndex[i])} ${model.weatherData.wind_from_direction = model.weatherData.data[model.timeIndex[i]].data.instant.details.wind_from_direction + ' ' + model.weatherData.meta.wind_from_direction}</li>
            <li>vindhastighet: ${model.weatherData.wind_speed = model.weatherData.data[model.timeIndex[i]].data.instant.details.wind_speed + ' ' + model.weatherData.meta.wind_speed}</li>
        </div>
    `;
    }

    return model.weather;
}

function printDirections(i) {
let degrees = model.weatherData.data[i].data.instant.details.wind_from_direction;

    let directions = ["nord ↑", "nordøst ↗", "øst →", "sørøst ↘", "sør ↓", "sørvest ↙", "vest ←", "nordvest ↖"];
    let index = Math.round(((degrees %= 360) < 0 ? degrees + 360 : degrees) / 45) % 8;
    return directions[index];
}