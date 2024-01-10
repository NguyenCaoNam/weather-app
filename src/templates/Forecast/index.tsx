import React from 'react'
import SearchBox from '../../components/SearchBox'
import images from '../../assets/images'
import { IWeatherHour } from '../../utils/Interfaces/IWeatherHour'
import moment from 'moment'

type TemplateForecastProps = {
    data?: IWeatherHour
    setValueSearch: (value: string) => void
}

const TemplateForecast = ({data, setValueSearch}: TemplateForecastProps) => {
  return (
    <div className='forecast'>
        <SearchBox onChange={setValueSearch} />
        <h2 className="title">5 Day Forecast</h2>
        <div className="forecast-list">
            {data?.forecast.forecastday.map((item, idx) => {
                return (
                    <div key={idx} className="forecast-item">
                        <div className="forecast-day">{moment(item.date).format('dddd')}</div>
                        <div className="forecast-info">
                            <div className="forecast-info-item forecast-temp">
                                <img src={images.IMG_TEMP} alt="" />
                                <div className="forecast-temp-lbl">
                                    <span className="forecast-lbl lbl-temp">{item.day.avgtemp_c}</span>
                                    <span className="icon-temp">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                            <circle cx="3.44141" cy="3.5" r="2.5" stroke="white"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="forecast-info-item">
                                <img src={images.IMG_RAIN} alt="" />
                                <div className="forecast-info-lbl">
                                    <span className="forecast-lbl">{item.day.daily_chance_of_rain}</span>
                                    <span className="unit">%</span>
                                </div>
                            </div>
                            <div className="forecast-info-item">
                                <img src={images.IMG_HUMIDITY} alt="" />
                                <div className="forecast-info-lbl">
                                    <span className="forecast-lbl">{item.day.avghumidity}</span>
                                    <span className="unit">%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TemplateForecast