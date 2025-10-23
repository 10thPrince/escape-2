import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFound from './pages/NotFound'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import AddProject from './components/projects/AddProject'
import ServicesPage from './pages/ServicesPage'
import AboutUs from './pages/AboutUs'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          {/* Private Routes */}
          <Route path='' element={<PrivateRoute />}>
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/addProject' element={<AddProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
