import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import { HeroUIProvider } from '@heroui/system'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </StrictMode>
  </Provider>

)
