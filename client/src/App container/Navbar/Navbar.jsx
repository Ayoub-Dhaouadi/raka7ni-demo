import React from 'react'
import navbarCSS from './Navbar.module.css'

export default function Navbar() {
    return (
        <div>
            
            <header className={navbarCSS.header}>
               <h1 className={navbarCSS.logo}>Raka7ni</h1> 
               <nav>
                   <ul className={navbarCSS.navLinks}>
                       <li><a href="/home">HOME</a></li>
                       <li><a href="/about">ABOUT</a></li>
                       <li><a href="/contact">CONTACT</a></li>
                   </ul>
               </nav>
               <div>
                <button className={navbarCSS.Login}><a href="/Login">Login</a></button>
                <button className={navbarCSS.Signup}><a href="/signup">SignUp</a></button>
               </div>

            </header>

        </div>    
           
    )
}
