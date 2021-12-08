import React from 'react'
// img are undefined 
// ..//images/speak.png
import speakPng from '../../images/speak.png' 
// ./images/2Hearts.png
import twoHeartsPng from '../../images/2Hearts.png'
const Showcase2 = () => {
    return (
        <div>
             <div className="grid container">
        <div className="grid1">
            <h2 className="f2">BUT SOMETIMES WE NEED A LITTLE PUSH!
            </h2>
            <p className="f22">Your Timeline is unique. It only shows the people YOU have crossed paths with. But don’t expect a Crush to fall from the sky. Take action!</p>
            <p className="f222">Like the profiles that catch your eye. If the feeling is mutual, it’s a Crush! The rest is up to you. Write to impress, get to know each other and meet up!</p>
        </div>
        <div className="grid2">
            <img src={speakPng} alt="" className="speak"/>
            <h1 className="f1">Real Conversations</h1>
            <p className="f11">Skip the small talk and spark meaningful conversation!</p>
        </div>
    </div>
    <img src={twoHeartsPng} className="hearts"/>
        </div>
    )
}

export default Showcase2
