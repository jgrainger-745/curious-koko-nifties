import React from 'react'
import './Header.css'
import kokoLogo from '../assets/hawaiianshirtkoko.jpg'
import searchIcon from '../assets/searchIcon.jpg'

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
        <input 
            className='searchInput' 
            placeholder='Collection, item or user ...'
        />
      </div>
    </div>
  )
}

export default Header