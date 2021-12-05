import React from 'react'
// image
import ErrorImage from '../../images/error.png'
import { useNavigate } from 'react-router-dom'
// style css 
import './Error.css'
const Error = () => {
    let navigate = useNavigate() ; 
    
    return (
        <>
        <div className="container">
        <h1>OOPS! PAGE NOT FOUND</h1>
        <img src={ErrorImage} alt=""/>
        <h2>We cant Find the page you are looking for.</h2>
    </div> 
    <button onClick={()=>navigate("/")} className="button-34">Home</button>
    </>
          )
}

export default Error
