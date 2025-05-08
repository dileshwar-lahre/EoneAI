import React from 'react'
import ResponsiveNavbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  return (
    <div>
        <ResponsiveNavbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default App