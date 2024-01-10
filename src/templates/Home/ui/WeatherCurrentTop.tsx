import React from 'react'
import { IWeather } from '../../../utils/Interfaces/IWeather'

type WeatherCurrentTopProps = {
    data?: IWeather
}

const WeatherCurrentTop = ({data}: WeatherCurrentTopProps) => {
  return (
    <div className='weather-current-top'>
        <div className="wrapper">
            <h3 className="title">{data?.location.name || ''}</h3>
            <img src={data?.current.condition.icon} alt="" className='icon' />
            <div className="temp">
                <span className='label'>{data?.current.temp_c}</span>
                <span className="icon-temp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8.5" stroke="white" strokeWidth="3"/>
                    </svg>
                </span>
            </div>
        </div>
    </div>
  )
}

export default WeatherCurrentTop