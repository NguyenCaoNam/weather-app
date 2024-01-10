import React from 'react'
import images from '../../../assets/images'
import { ICurrentWeather } from '../../../utils/Interfaces/IWeather'

type WeatherCurrentDetailTopProps = {
    data?: ICurrentWeather
}

const WeatherCurrentDetailTop = ({data}: WeatherCurrentDetailTopProps) => {
  return (
    <div className='weather-detail-top'>
        <div className="wrapper">
            <div className="item item-left">
                <div className="title">Nhiệt Độ</div>
                <div className="content">
                    <img src={images.IMG_TEMP} alt="" className='image'/>
                    <div className="label label-temp">
                        <span className="text">{data?.temp_c}</span>
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                                <circle cx="3" cy="3.5" r="2.5" stroke="white"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="item item-large">
                <div className="title">Mưa</div>
                <div className="content">
                    <img src={images.IMG_RAIN} alt="" className='image'/>
                    <div className="label">
                        <span className="text">88</span>
                        <span className="unit">%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherCurrentDetailTop