import React from 'react'
import Navbar from './Navbar'
import Section from './Section'
import Showcase2 from './Showcase2'
import Showcase1 from './Showcase1'
// style css 
import './style.css'

const Home = () => {
    return (
        <>
            <Navbar/>
            <Showcase1/>
            <Showcase2/>
            <Section/>
        </>
    )
}

export default Home
