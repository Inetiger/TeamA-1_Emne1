const model = {
    position: {
        latitude: '',
        longitude: '',
    },
    weatherData: {
        data: '',
        meta: '',
        symbol: [],
        air_temperature: '',
        relative_humidity: '',
        wind_from_direction: '',
        wind_speed: '',
    },
    timeIndex: [
        3, 
        8, 
        14
    ],
    dateAndTime: [
        new Date().getHours() + 1 + ':00 om 1 time',
        new Date().getHours() + 6 + ':00 om 6 timer',
        new Date().getHours() + 12 + ':00 om 12 timer',
    ],
    weather: '',
}