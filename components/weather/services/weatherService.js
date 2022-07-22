import { DateTime } from "luxon";

const API_KEY = 'aa999e2b4c72bfaac68217524f743ede';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';


//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=aa999e2b4c72bfaac68217524f743ede

const getWeatherData = (infoType, searchParams) => {
    // creating a url according to the needed data by url
    // like - weather/onecall
    const url = new URL(BASE_URL + "/" + infoType);
    // this is prvoiding the specific information that which bases you want to call api - cityName, log-lat
    // like - ?q=delhi&appid=aa999e2b4c72bfaac68217524f743ede
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    console.log(url)

    // now fetch data from api
    return fetch(url)
        .then((res) => res.json())
    // .then(data=>console.log("resultData", data))
    // find this then in "getFormattedWeatherData()"
};

// formate the current weather data which we get from "getFormattedWeatherData"
// for the end point /weather
const formatCurrentWeather = (data) => {
    // extracting data from the weather or current weather api
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max },
        name,
        visibility,
        wind: { speed, deg },
        dt,
        sys: { country, sunrise, sunset },
        weather
    } = data;
    const { main: details, icon } = weather[0];
    console.log("fromatcurrent weather ", lat, lon)
    return { lat, lon, temp, feels_like, temp_min, temp_max, name, visibility, speed, deg, dt, country, sunrise, sunset, details, icon };
}


// formate the onecall api data which we get from "getFormattedForecastData"
// for the end point /onecall
const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;

    // for the days data in formatted from
    daily = daily && daily.slice(1, 6).map(d => {
        return{
            title: formatToLocalTime(d.dt, timezone, "cccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });
    // for the hourly data in formatted from 
    hourly = hourly && hourly.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "cccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });
}

// formate the data witch we get from the getWeatherData
// here searchparams could be "lat, log or city name"
const getFormattedWeatherData = async (searchParams) => {
    // current weather data from the weather api
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
        .then(formatCurrentWeather)
    //data => formatCurrentWeather
    
    // hourly and daily data from one-call api
    const { lat, lon } = formatCurrentWeather;
    console.log("main function",lat, lon)
    const formattedForecastWeather = await getWeatherData('onecall',
        { lat, lon, exclude: 'current, minutely,alert', units: searchParams.units })
        .then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather};
};

// let result = formatCurrentWeather();
// console.log("formatCurrentWeather", result)  


// formate time and date to local time
// cccc= day, dd= date, LLL= months, yyyy = year
const formatToLocalTime = (secs, zone, format = "cccc, dd, LLL, yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// get icon url from the code of weather icon
const iconUrlFromCode = (code) =>{
    `https://api.openweathermap.org/img/wn/${code}@2x.png`
}
console.log("iconUrlFromCode", iconUrlFromCode)

export default getFormattedWeatherData;

export {formatToLocalTime, iconUrlFromCode};