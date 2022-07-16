import React from 'react'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>


        <div className="links-container show-container"></div>
        <ul className="social-icons"></ul>
      </nav>
    </>
  )
}

export default Navbar