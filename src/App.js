import './App.css';
// import UitStar from "@iconscout/react-unicons-thinline/icons/uit-star";
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import TempAndDetails from './Components/TempAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWheatherData from './Servieces/weatherServiece';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({queryStr: 'q=mumbai'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.queryStr ? query.queryStr.slice(2) : 'current location';
      toast.info('fetching weather for ' + message);
      const data = await getFormattedWheatherData({...query, units: units}).then(data => {
        toast.success(`successfully fetched weather for ${data.name}`)
        setWeather(data)
      });
    }
  
    fetchWeather();
  }, [query, units]);

  const changeBackground = () => {
    if(!weather){
      return 'from-cyan-700 to-blue-700'
    }

    const threshold = units === 'metric'? 20: 60;
    if(weather.temp <= threshold){
      return 'from-cyan-700 to-blue-700'
    }else{
      return 'from-yellow-700 to-orange-700'
    }
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${changeBackground()} h-fit shadow-xl shadow-gray-400`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {
          weather && (
            <div>
              <TimeAndLocation weather={weather}/>
              <TempAndDetails weather={weather} units={units}/>
              <Forecast title={'hourly'} items={weather.hourly}/>
              <Forecast title={'daily'} items={weather.daily}/>
            </div>
          )
        }
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
    </div>
  );
}

export default App;

// API Key = U0QFbgh7T8L9a9m8MqrCL1SO58Va1tHi