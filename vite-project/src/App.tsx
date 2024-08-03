import React from 'react'
import './App.css'
import Counter from './components/Counter'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import SignIn from './pages/sign-in/SignIn'
import LandingPage from './pages/landing-page/LandingPage'
import SignUp from './pages/sign-up/SignUp'
import { Dashboard } from '@mui/icons-material'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
