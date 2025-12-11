import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import App from './App.jsx'
import './index.css'
import "./app.css"
import "./variables.css"


createRoot(document.getElementById('root')).render(
 <StrictMode>
   <MantineProvider>
     <App />
   </MantineProvider>
 </StrictMode>,
)