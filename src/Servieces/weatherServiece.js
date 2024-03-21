import { DateTime } from "luxon";

const API_KEY = 'fda11d8b03a6d1151cbe1abb645cc7a1';
const BASE_URL = 'https://api.openweathermap.org/data';

const getWheatherData = async (infoType, searchParams, version) => {
    const url = `${BASE_URL}/${version}/${infoType}?${searchParams}&appid=${API_KEY}`
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

const getFormattedWheatherData = async (searchParams) => {
    
    try {
        const formattedCurrentWheather = await getWheatherData('weather', `${searchParams.queryStr}&units=${searchParams.units}`, '2.5').then(formatCurrentWheather);
        
        const {lat, lon} = formattedCurrentWheather;

        const formattedWeatherForecast  = await getWheatherData('onecall', `lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&units=${searchParams.units}`, '3.0').then(formatForecastWeather)
        return {...formattedCurrentWheather, ...formattedWeatherForecast};
    } catch (error) {
        
    }
}

// temperatureApparent = Real Fell
const formatCurrentWheather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data;

    const {main: details, icon} = weather[0];

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, speed, details, icon}
}

const formatForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'cccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })

    hourly = hourly.slice(1,6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    })

    return {timezone, daily, hourly}
}

const formatToLocalTime = (secs, zone, format= "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWheatherData
export {formatToLocalTime, iconUrlFromCode};