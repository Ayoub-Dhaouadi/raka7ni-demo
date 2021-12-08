import React from 'react'
//  icon
import { FiArrowUpCircle } from "react-icons/fi";
import singleWebp from "../../images/single.webp"
// images 
const Section = () => {
    return (
        <div>
            <div className="showcase2 container">
        <h3 className="f3">Do Not Be Afraid To Be Yourself</h3>
        <div> <p> Your other half will only be able to get to know you if you are yourself all the time.</p></div>
        <div> <p>Forget the perfect selfies and cute filters.To make the perfect match,</p></div>
        <div> <p>it's essential to be honest and genuine from the start.</p></div>
    </div>
    <img src={singleWebp} alt="" className="single-ppl"/>
    

    <div></div>
    {/* <a className="gotop" href="#"><i class="fas fa-arrow-up"></i></a> */}
    <div className="footer">© 2021 Copyrights By : <span> <a href="https://www.facebook.com/3lech.ta9ra.fih.hedha"> Ayoub Dhaouadi</a> , <a href="https://www.facebook.com/yassin.bagane/"> Yassin Bagane</a></span></div>
        </div>
    )
}

export default Section
