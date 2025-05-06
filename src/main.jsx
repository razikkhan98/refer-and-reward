import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Bootstrap CSS 5
import 'bootstrap/dist/css/bootstrap.min.css';

// Ant Design
import 'antd/dist/reset.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
