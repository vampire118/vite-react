import React from 'react'
import './App.css'
import Counter from './components/Counter'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import SignIn from './pages/sign-in/SignIn'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
