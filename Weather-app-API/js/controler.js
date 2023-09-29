"use strict";

function getMyLocation() {
    function success(pos) {
        const crd = pos.coords;

        model.position.latitude = crd.latitude;
        model.position.longitude = crd.longitude;

        weatherData();
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

function weatherData() {
    axios.get(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${model.position.latitude}&lon=${model.position.longitude}`)
        .then(Response => {
            model.weatherData.data = Response.data.properties.timeseries;
            model.weatherData.meta = Response.data.properties.meta.units;
            model.weatherData.symbol.push(Response.data.properties.timeseries[3].data.next_1_hours.summary.symbol_code);
            model.weatherData.symbol.push(Response.data.properties.timeseries[3].data.next_6_hours.summary.symbol_code);
            model.weatherData.symbol.push(Response.data.properties.timeseries[3].data.next_12_hours.summary.symbol_code);
            updateView();
        })
}