import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Feedback from './components/Feedback/Feedback'
import LandingPage from './Pages/LandingPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path='/' element = {<LandingPage />} />
         <Route path='/home' element = {<Home />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path='/feedback' element = {<Feedback />} />

      </Routes>
    </>
  )
}

export default App
