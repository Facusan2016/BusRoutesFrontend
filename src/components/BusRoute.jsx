import { Link, NavLink } from 'react-router-dom'

export const BusRoute = ({
  route_id,
  route_long_name,
  route_short_name,
  agency_id
}) => {
  return (
    <NavLink
      to={`${route_id}`}
      key={ route_id }
      className={({ isActive }) => (
        `min-w-fit p-5 border bg-gray-200 border-gray-300 rounded-xl
        transition-colors md:min-w-full
        ${ isActive ? 'bg-gray-500 text-white' : ''}
      `)}
    >
      
      <h3 className='font-bold'>{route_short_name}</h3>
      <p className='text-sm text-left mt-2'>
        {route_long_name}
      </p>

    </NavLink>
  )
}
