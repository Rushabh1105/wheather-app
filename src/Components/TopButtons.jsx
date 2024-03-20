import React from 'react'

function TopButtons() {

    const cities = [
        {
            id: 1,
            title: 'New Delhi'
        },
        {
            id: 1,
            title: 'Tokyo'
        },
        {
            id: 1,
            title: 'New York'
        },
        {
            id: 1,
            title: 'Dubai'
        },
        {
            id: 1,
            title: 'Sydney'
        },
    ]

  return (
    <div className='flex items-center justify-around my-6'>
        {
            cities.map((city) => (
                <button key={city.id} className='text-white text-lg font-medium'>
                    {city.title}
                </button>
            ))
        }
    </div>
  )
}

export default TopButtons