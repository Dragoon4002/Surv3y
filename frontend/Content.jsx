import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Sidebar from './Sidebar.jsx'
import SurveyForm from './SurveyForm.jsx'
import './scss/Content.scss'
const Content = () => {
    const [showForm, setShowForm] = useState(false);

  const handleCreateNewSurvey = () => {
    setShowForm(true);
  };
  return (
    <div className='content'>
      {!showForm ? (
        <Button variant="contained" onClick={handleCreateNewSurvey}>
          Create New Survey
        </Button>
      ) : (
        <SurveyForm />
      )}
    </div>
  )
}

export default Content
