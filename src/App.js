import './App.css';
// import UitStar from "@iconscout/react-unicons-thinline/icons/uit-star";
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import TempAndDetails from './Components/TempAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWheatherData from './Servieces/weatherServiece';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({queryStr: 'mumbai'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWheatherData({...query, units: units}).then(data => setWeather(data));
      console.log(data);
    }
  
    fetchWeather();
  }, [query, units]);

  

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
        {
          weather && (
            <div>
              <TimeAndLocation weather={weather}/>
              <TempAndDetails weather={weather}/>
              <Forecast title={'hourly'} items={weather.hourly}/>
              <Forecast title={'daily'} items={weather.daily}/>
            </div>
          )
        }
      
    </div>
  );
}

export default App;

// API Key = U0QFbgh7T8L9a9m8MqrCL1SO58Va1tHi