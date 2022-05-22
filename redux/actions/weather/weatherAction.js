import { GET_WEATHER_DATA } from "../../constants/weather/weatherActionType";

// create action
export const getWeatherData = (data) =>{
    type : GET_WEATHER_DATA
    payload: data
}