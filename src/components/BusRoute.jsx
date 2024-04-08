import { Link, NavLink } from 'react-router-dom'

export const BusRoute = ({
  route_id,
  route_long_name,
  route_short_name,
  agency_id
}) => {
  return (
    <li
      key={route_id}
      className='
        w-full p-5 border border-gray-300 rounded-xl
        hover:bg-gray-400 hover:text-white
        transition-colors
      '
    >
      <NavLink
        to={`${route_id}`}
        className={({isActive}) => isActive ? 'bg-red-400': ''}
      >
        
        <h3 className='font-bold'>{route_short_name}</h3>
        <p className='text-sm text-left mt-2'>
          {route_long_name}
        </p>

      </NavLink>
    </li>
  )
}
