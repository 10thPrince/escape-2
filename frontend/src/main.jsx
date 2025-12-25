import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import { HeroUIProvider } from '@heroui/system'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <HeroUIProvider>
        <Navbar />
        <App />
        <Footer />
      </HeroUIProvider>
    </BrowserRouter>
  </Provider>

)
