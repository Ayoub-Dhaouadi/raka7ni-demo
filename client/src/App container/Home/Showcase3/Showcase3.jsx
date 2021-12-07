import React from 'react'
import Showcase3CSS from './Showcase3.module.css'
import SinglePpl from '../../../images/single.webp'

export default function Showcase3() {
    return (
        <div>
            <div class={Showcase3CSS.container}>
                <div className={Showcase3CSS.Showcase3}>

                <h3 class={Showcase3CSS.f3}>Do Not Be Afraid To Be Yourself</h3>
                <div> <p> Your other half will only be able to get to know you if you are yourself all the time.</p></div>
                <div> <p>Forget the perfect selfies and cute filters.To make the perfect match,</p></div>
                <div> <p>it's essential to be honest and genuine from the start.</p></div>


                </div>
                
            </div>
    
           <img className={Showcase3CSS.single} src={SinglePpl} alt="" ></img>
        </div>
    )
}
