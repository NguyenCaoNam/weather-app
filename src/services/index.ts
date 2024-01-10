import { PARAMS_FORECAST } from './../utils/constants/index';
import { get } from './../utils/libs/axios';
import { PARAMS, PARAMS_HOUR } from './../utils/constants';

// get current weather
export const getCurrentWeather = async (q: string) => {
    const response = await get('/current.json', {...PARAMS, q})
    return response
}

// get current hour
export const getCurrentWeatherHour = async (q: string) => {
    const response = await get('/forecast.json', {...PARAMS_HOUR, q})
    return response
}

// get  dáy forecast
export const get5DaysForeCast = async (q: string) => {
    const response = await get('/forecast.json', {...PARAMS_FORECAST, q})
    return response
}

