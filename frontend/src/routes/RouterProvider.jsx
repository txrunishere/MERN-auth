import { Route, Routes } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'


const RouterProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default RouterProvider