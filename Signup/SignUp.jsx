import React ,{useEffect,useState} from 'react'
import { paragraphs } from './paragraphs';
import './signup.css'
import { AiFillFacebook } from "react-icons/ai";
const SignUp = () => {
    const [paragraph,setPragraph] = useState('default p')

    useEffect(()=> { 
         const randomPragraphs = paragraphs[Math.floor(Math.random() * paragraphs.length)];
         setPragraph(randomPragraphs)
    },[])
    return (
        <div className="sign-up">
            <h3>sign up  </h3>
            <p>{paragraph}</p>
            <div className="buttonandlogo">

            <button className="button-form">Sign Up With Facebook <AiFillFacebook/></button>
            <div className="underline"></div>
            <div className="logo">RAKA7NI &copy;</div>
            </div>
        </div>
    )
}

export default SignUp
