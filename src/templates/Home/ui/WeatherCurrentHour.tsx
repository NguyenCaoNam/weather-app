import React from 'react'
import { IForecastday, IHour } from '../../../utils/Interfaces/IWeatherHour'
import moment from 'moment'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type WeatherCurrentHourProps = {
  dataForecastday?: IForecastday
}

const WeatherCurrentHour = ({dataForecastday}: WeatherCurrentHourProps) => {
  return (
    <div className='weather-hour'>
      <div className="wrapper">
        <div className="weather-hour-head">
          <h3 className="title">Hôm nay</h3>
          <span className="time">{moment(dataForecastday?.date).format('DD/MM/YYYY')}</span>
        </div>
        <div className="weather-hour-list">
          <Swiper
            spaceBetween={8}
            slidesPerView={5}
            allowTouchMove={true}
          >
            {dataForecastday?.hour.map((item: IHour, idx: number) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="weather-hour-item">
                    <div className="weather-temp">
                      <span className="lbl-temp">{item.temp_c}</span>
                      <span className="temp-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                          <circle cx="3.39844" cy="3" r="2.5" stroke="white"/>
                        </svg>
                      </span>
                    </div>
                    <div className="weather-image">
                      <img src={item.condition.icon} alt="" />
                    </div>
                    <div className="weather-time">{moment(item.time).format('HH:mmA')}</div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default WeatherCurrentHour