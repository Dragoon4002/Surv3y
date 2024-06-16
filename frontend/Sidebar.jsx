import React from 'react'
import Button from '@mui/material/Button';
import './scss/Sidebar.scss'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Button variant="contained">Create New Survey</Button>
      <Button variant="contained">Posted Surveys</Button>
    </div>
  )
}

export default Sidebar
