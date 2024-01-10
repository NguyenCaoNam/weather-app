export interface ILocation {
    country: string
    name: string
    lat: number
    lon: number
    localtime: string
}

export interface ICurrentWeather {
    cloud: number
    condition: {
        code: number
        icon: string
        text: string
    }
    temp_c: number
    feelslike_c: number
    humidity: number
    precip_mm: number
    pressure_mb: number
    uv: number
    vis_km: number
    wind_degree: number
    wind_dir: string
    wind_kph: number
}

export interface IWeather {
    location: ILocation
    current: ICurrentWeather
}