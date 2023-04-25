import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home.page'
import { URLS } from './constants/routes'
import Navbar from './components/navbar'

function App() {
  return (
      <Router>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path={URLS.home.route} element={<Home/>}/>
          </Routes>
        </div>
      </Router>
  )
}

export default App
