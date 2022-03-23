const fetch = require('node-fetch');
// import fetch from 'node-fetch';
const config = require('../config');
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_URL = 'https://api.openweathermap.org/data/2.5';

const CACHE = {};
/*
CACHE = {
    "skopje": {
        ...
    },
    "bitola": {
        ...
    }
}
*/

const getCityWeather = async (city) => {
    let now = new Date().getTime() / 1000; // 10 < 5 + 4 // тековно време < време на креирање на кеш + траење на кеш

    if (CACHE[city] && now < CACHE[city].timestamp + config.get('weather').cache_expiery) {
        return CACHE[city];
    }

    let URL = `${API_URL}/weather?q=${city}&units=metric&appid=${config.get('weather').api_key}`;
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CACHE[city] = {
            timestamp: new Date().getTime() / 1000,
            data
        };

        return data;
    } catch(err) {
        throw err;
    }
};

module.exports = {
    getCityWeather
};


// let person = {
//     name: 'Pero'
// };

// console.log(person.name);
// console.log(person['name']);