export const BASE_URL_API = 'https://api.weatherapi.com/v1';

export const PARAMS = {
    'key': 'c9a0ca46550648b29ce125849232709',
    'aqi': 'no',
    'lang': 'vi'
}

export const PARAMS_HOUR = {
    ...PARAMS,
    'days': 1,
    'alerts': 'no'
}

export const PARAMS_FORECAST = {
    ...PARAMS,
    'days': 5,
    'alerts': 'no'
}