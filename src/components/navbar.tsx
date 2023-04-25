import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { URLS } from '../constants/routes'

const Navbar: FC = () => {
  return (
    <header>
      <div className="container">
        <Link to={URLS.home.route}>
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar