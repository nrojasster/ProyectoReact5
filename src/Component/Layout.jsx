import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}
