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
    <ul 
      className='z-10 w-[20%] min-w-[15rem]
      h-full overflow-y-scroll left-0 top-0 bg-gray-100
      flex flex-col items-center justify-left p-5 gap-5'
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
  )
}

export default BusesList;