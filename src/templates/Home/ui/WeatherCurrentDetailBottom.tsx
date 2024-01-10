import React from 'react'
import { ICurrentWeather } from '../../../utils/Interfaces/IWeather'
import ItemCurrentDetailBottom from '../../../components/ItemCurrentDetailBottom'
import images from '../../../assets/images'

type WeatherCurrentDetailBottomProps = {
    data?: ICurrentWeather
}

const WeatherCurrentDetailBottom = ({data}: WeatherCurrentDetailBottomProps) => {
  return (
    <div className='weather-detail-bottom'>
        <div className="wrapper">
            <ItemCurrentDetailBottom
                title='Độ Ẩm'
                image={images.IMG_HUMIDITY}
                lblText={data?.humidity}
                lblUnit='%'
            />
            <ItemCurrentDetailBottom
                title='Mây'
                image={images.IMG_CLOUD}
                lblText={data?.cloud}
                lblUnit='%'
            />
            <ItemCurrentDetailBottom
                title='Gió'
                image={images.IMG_WIND}
                lblText={data?.wind_kph}
                lblUnit='km/h'
            />
            <ItemCurrentDetailBottom
                title='Độ Ẩm'
                image={images.IMG_AMOUNT_RAIN}
                lblText={data?.precip_mm}
                lblUnit='mm'
            />
        </div>
    </div>
  )
}

export default WeatherCurrentDetailBottom