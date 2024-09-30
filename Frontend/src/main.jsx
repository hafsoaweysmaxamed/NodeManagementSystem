import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  App from './App'
import Header from './Components/Header'
import Home from './Pages/Home'
import Note from './Pages/Note'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
<App/>
</BrowserRouter>
  </StrictMode>,
)
