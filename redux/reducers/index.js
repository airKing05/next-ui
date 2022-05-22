import { combineReducers } from "redux";
import { getWeatherDataReducer } from "./weather/weatherReducer";

const  rootReducer = combineReducers({
    weatherState: getWeatherDataReducer
});

export default rootReducer;