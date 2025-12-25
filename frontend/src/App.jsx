import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFound from './pages/NotFound'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import ServicesPage from './pages/ServicesPage'
import AboutUs from './pages/AboutUs'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'
import { useGetProfileMutation } from './slices/userApiSlice'
import { setCredentials } from './slices/authSlice'
import ManageWeb from './pages/ManageWeb'
import Courses from './pages/Courses'



function App() {
  const dispatch = useDispatch();
  const { data: user, isSuccess } = useGetProfileMutation(undefined, {
    skip: !localStorage.getItem('userInfo'),
  })

  useEffect(()=>{
    if(isSuccess && user){
      dispatch(setCredentials(user));
    }
  }, [user, isSuccess, dispatch])

  return (
    
      <>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path="/services/:serviceName" element={<ServicesPage />} />
          <Route path="/services/:serviceName/:subName" element={<ServicesPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/courses' element={<Courses />} />
          {/* Private Routes */}
          <Route path='' element={<PrivateRoute />}>
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/addProject' element={<ManageWeb />} />
          </Route>
        </Routes>
      </>
    
  )
}

export default App
