import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Home from './Pages/Home Page/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error Page/Error'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import SignUp from './Pages/SignUp'
const App = () => {
    return (
        <>
            <Router>
                {/* navbar */}
                <Routes>
                    <Route excat path="/" element={<Home/>} /> 
                    <Route excat path="/about" element={<About/>} /> 
                    <Route excat path="/contact" element={<Contact/>} /> 
                    <Route excat path="/error-404" element={<Error/>} /> 
                    <Route excat path="/login" element={<Login/>} /> 
                    <Route excat path="/profile" element={<Profile/>} /> 
                    <Route excat path="/signup" element={<SignUp/>} /> 
                    
                    
                </Routes>
            </Router>
        </>
    )
}

export default App
