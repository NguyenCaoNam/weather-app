import React, { useEffect } from 'react'
import './index.css';
import TemplateHome from './../../templates/Home';
import Layout from './../../components/Layouts';
import { IWeather } from '../../utils/Interfaces/IWeather';
import { getCurrentWeather, getCurrentWeatherHour } from '../../services';
import { IWeatherHour } from '../../utils/Interfaces/IWeatherHour';

interface ILocation {
  lat: number
  lon: number
}

const Home = () => {
  const location = localStorage.getItem('LLocation');
  const { lat, lon } = JSON.parse(String(location)) || { lat: 0, lon: 0 };
  
  const [data, setData] = React.useState<IWeather>();
  const [dataForecastday, setDataForecastday] = React.useState<IWeatherHour>();
  const [valueSearch, setValueSearch] = React.useState<string>(
    location ? `${lat},${lon}` : 'Danang'
  );

  useEffect(() => {
    const fetchData = async() => {
      await fetchCurrentWeather(valueSearch)
      await fetchCurrentWeatherHour(valueSearch)
    }
    fetchData()
  }, [valueSearch])

  const fetchCurrentWeather = async (q: string) => {
    const response: IWeather = await getCurrentWeather(q)
    setData(response)
    const location: ILocation = {
      'lat': response.location.lat,
      'lon': response.location.lon,
    }
    localStorage.setItem('LLocation', JSON.stringify(location))
  }

  const fetchCurrentWeatherHour = async (q: string) => {
    const response = await getCurrentWeatherHour(q)
    setDataForecastday(response)
  }

  return (
    <Layout>
      <TemplateHome data={data} dataForecastday={dataForecastday} setValueSearch={setValueSearch} />
    </Layout>
  )
}

export default Home