import React from 'react'
import Layout from '../../components/Layouts'
import TemplateForecast from '../../templates/Forecast'
import { IWeatherHour } from '../../utils/Interfaces/IWeatherHour'
import { get5DaysForeCast } from '../../services'

import './index.css'

const Forecast = () => {
  const location = localStorage.getItem('LLocation');
  const { lat, lon } = JSON.parse(String(location)) || { lat: 0, lon: 0 };

  const [data, setData] = React.useState<IWeatherHour>();
  const [valueSearch, setValueSearch] = React.useState<string>(
    location ? `${lat},${lon}` : 'Danang'
  );

  React.useEffect(() => {
    fetchForecast(valueSearch)
  }, [valueSearch])

  const fetchForecast = async(q: string) => {
    const response = await get5DaysForeCast(q)
    setData(response)
  }

  return (
    <Layout>
      <TemplateForecast 
        data={data}
        setValueSearch={setValueSearch}
      />
    </Layout>
  )
}

export default Forecast