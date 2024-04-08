import { Outlet } from 'react-router-dom'
import BusesList from './components/BusesList'
import './App.css'

function App() {

  return (
    <main className='w-screen h-screen flex flex-row items-center overflow-hidden'>
      <BusesList/>
      <Outlet/>
    </main>
  )
}

export default App
