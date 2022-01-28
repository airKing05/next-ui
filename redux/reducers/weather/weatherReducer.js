import { GET_WEATHER_DATA } from "../../constants/weather/weatherActionType";

// action creater

const weatherInitialState = [
25, 20
];

export const  getWeatherDataReducer = (state = weatherInitialState, action) => {
    switch (action.type) {
        case GET_WEATHER_DATA: return {...state, data: action.payload}
     default:
           return state;
    }
}