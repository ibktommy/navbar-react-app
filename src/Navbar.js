import React, { useState } from 'react'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'

const Navbar = () => {
  // Setting Navabr State
  const [showLinks, setShowLinks] = useState(false)

  return (
    <>
      <nav>
        <div className="nav-header">
          <img src={logo} alt="logo" />

          <div className="links-container show-container hidden">
            <ul className="links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Poducts</a>
              </li>
            </ul>
          </div>

          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>

        {
          showLinks && <div className="links-container show-container">
            <ul className="links">
              {
                links.map((link) => {
                  const { id, text, url } = link
                  return (
                    <li key={id}>
                      <a href={url} className="link">{text}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        }

        <ul className="social-icons">
          {
            social.map((socialIcon) => {
              const { id, url, icon } = socialIcon
              return (
                <li key={id}>
                  <a href={url} className='icon'>{icon}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}

export default Navbar