import React ,{useEffect,useState} from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { paragraphs } from './paragraphs';
const Login = () => {
    const [paragraph,setPragraph] = useState('default p')

    useEffect(()=> { 
         const randomPragraphs = paragraphs[Math.floor(Math.random() * paragraphs.length)];
         setPragraph(randomPragraphs)
    },[])
    return (
        <div className="sign-up">
      <h3>sign in  </h3>
            <p>{paragraph}</p>
            <div className="buttonandlogo">
            <button className="button-form">Sign In With Facebook <AiFillFacebook/></button>
            <div className="underline"></div>
            <div className="logo">RAKA7NI &copy;</div>
            </div>
           
    </div>
    )
}

export default Login
