import React from 'react'
import {Link , useNavigate} from 'react-router-dom' ; 

const Navbar = () => {
    let navigate = useNavigate() ; 
    return (
        <div className="navbar">
        <div className="container flex">
            <h1 className="logo">RAKA7NI</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div class="login-signup">
                <button onClick={()=>navigate("/login")} className="login">login</button>
                <button  onClick={()=>navigate("/signup")} className="signup">sign up</button>
            </div>
        </div>
    </div>
    )
}

export default Navbar
