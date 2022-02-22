import React from 'react'
import './Header.css'
import kokoLogo from '../assets/hawaiianshirtkoko.jpg'

const Header = () => {
  return (
    <div className='header'>

      <div className='logoContainer'>
          <img src={kokoLogo} className="kokoLogo" alt="" />
      </div>

      <div className='searchContainer'>
        <div className='iconContainer'>
          <img src= {searchIcon} />

        </div>
      </div>
    </div>
  )
}