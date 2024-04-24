import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import bus from '../api/bus';
import { BusRoute } from './BusRoute';

const BusesList = () => {

  const [busData, setBusData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    
    setIsLoading(true)

    bus.get('/')
    .then(({ data }) => {
      setBusData(data)
      setIsLoading(false)
    })
  
  }, [])

  return (
    <nav
      className='z-10 h-fit md:w-[20%] md:min-w-[15rem]
      md:h-full overflow-auto left-0 top-0 bg-gray-100'
    >
      <ul
        className='flex h-full md:flex-col items-center justify-left p-5 gap-5'
      >

        {
          !isLoading && busData ? (
            busData.data.map(
              (bus) => (
                <BusRoute key={bus.route_id} {...bus}/>
              )
            )
          ) : <h1>Loading...</h1>
        }
      </ul>
    </nav>
  )
}

export default BusesList;