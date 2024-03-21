import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';

function Inputs({setQuery, units, setUnits}) {

  const [city, setCity] = useState('');

  const handleSearch = () => {
    if(city !== ''){
      setQuery({queryStr: `q=${city}`})
    }
  }

  const handleLocation = () => {
    if(navigator.geolocation){
      toast.info('Fetching your location')
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Fetched loaction successfully')
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({queryStr: `lat=${lat}&lon=${lon}`})
      })
    }
  }

  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if(units !== selectedUnit){
      setUnits(selectedUnit);
    }
  }

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
                type='text' 
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                className='text-xl font-light p-2 w-full shadow-xl capitalize placeholder:lowercase' 
                placeholder='Search for city...'
            />
            <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleSearch}/>
            <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleLocation}/>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' onClick={(e) => handleUnits(e)} className='text-xl text-white font-light transition ease-out hover:scale-125'>°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button name='imperial' onClick={(e) => handleUnits(e)} className='text-xl text-white font-light transition ease-out hover:scale-125'>°F</button>
        </div>
    </div>
  )
}

export default Inputs