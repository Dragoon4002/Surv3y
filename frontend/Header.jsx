import React from 'react'
import { FaBell } from "react-icons/fa";
import Button from '@mui/material/Button';
import './scss/Header.scss'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-text'>DashBoard</div>
      <div className="header-options">
          <Button variant="contained">Login</Button>
          <Button variant="contained">Connect Wallet</Button>
          <FaBell className='bell' />
      </div>
    </div>
  )
}

export default Header
