
import React from 'react'
import SearchBox from '../../components/SearchBox'
import WeatherCurrentTop from './ui/WeatherCurrentTop'
import { IWeather } from '../../utils/Interfaces/IWeather'
import WeatherCurrentDetailTop from './ui/WeatherCurrentDetailTop'
import WeatherCurrentDetailBottom from './ui/WeatherCurrentDetailBottom'
import { IWeatherHour } from '../../utils/Interfaces/IWeatherHour'
import WeatherCurrentHour from './ui/WeatherCurrentHour'
import { NavLink } from 'react-router-dom'

type TemplateHomeProps = {
  data?: IWeather
  dataForecastday?: IWeatherHour
  setValueSearch: (value: string) => void
}

const TemplateHome = ({data, dataForecastday, setValueSearch}: TemplateHomeProps) => {

  return (
    <div>
        <SearchBox onChange={setValueSearch} />
        <div>
          <WeatherCurrentTop data={data} />
          <div>
            <WeatherCurrentDetailTop data={data?.current} />
            <WeatherCurrentDetailBottom data={data?.current} />
          </div>
        </div>
        <WeatherCurrentHour dataForecastday={dataForecastday?.forecast.forecastday[0]} />
        <div className='btn-wrapper'>
          <NavLink className="btn" to="/5-days-forecast">5 Day Forecas</NavLink>
        </div>
    </div>
  )
}

export default TemplateHome