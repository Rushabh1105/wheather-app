import './App.css';
// import UitStar from "@iconscout/react-unicons-thinline/icons/uit-star";
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import TempAndDetails from './Components/TempAndDetails';
import Forecast from './Components/Forecast';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempAndDetails />
      <Forecast title={'hourly'}/>
      <Forecast title={'daily'}/>
    </div>
  );
}

export default App;

// API Key = U0QFbgh7T8L9a9m8MqrCL1SO58Va1tHi