import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import WorkoutProvider from './context/workout-context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WorkoutProvider>
      <App />
    </WorkoutProvider>
  </React.StrictMode>,
)
