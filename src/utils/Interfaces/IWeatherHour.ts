import { ICurrentWeather, ILocation } from "./IWeather"

export interface IHour {
    time: string
    temp_c: number
    condition: {
        text: string
        icon: string
        code: number
    }
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    precip_mm: number
    snow_cm: number
    humidity: number
    cloud: number
    feelslike_c: number
    windchill_c: number
    chance_of_rain: number
    gust_kph: number
}

export interface IDay {
    avgtemp_c: number
    avghumidity: number
    daily_chance_of_rain: number
}

export interface IForecastday {
    date: string
    day: IDay
    hour: IHour[]
}

export interface IForecast {
    forecastday: IForecastday[]
}

export interface IWeatherHour {
    location: ILocation
    current: ICurrentWeather
    forecast: IForecast
}