import { Link } from 'react-router-dom'
import bus from '../api/bus.js'
import { useEffect, useState } from 'react'

const BusesList = () => {

  const [busData, setBusData] = useState(null)

  useEffect(() => {
    bus.get('/')
    .then(({ data }) => {
      setBusData(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  

  return (
    <ul 
      className='
      z-10 w-[20%]
      h-full overflow-y-scroll
      left-0 top-0 bg-gray-200
      flex flex-col items-center
      justify-left p-5 gap-5'
    >
      { !busData && 'Loading buses...'}
      {
        busData && busData.data &&
        busData.data.map(
          (bus) => (
            <li
              key={bus.route_id}
              className='
              p-5 border border-gray-300 rounded-xl'
            >
              <Link to={`${bus.route_id}`}>
                <p className=' text-left'>
                  {bus.route_long_name}
                </p>
              </Link>
            </li>
          )
        )
      }
    </ul>
  )
}

export default BusesList;