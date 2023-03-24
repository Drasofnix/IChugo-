const axios = require('axios');

const fetchWeatherData = async () => {
    const { data } = await axios.get(
        'https://api.genshin.dev/characters/all'
    );
    console.log(data);
}
fetchWeatherData();