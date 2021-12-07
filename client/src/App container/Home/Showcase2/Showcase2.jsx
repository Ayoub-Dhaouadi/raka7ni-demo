import React from 'react'
import Showcase2CSS from './Showcase2.module.css'
import speak from '../../../images/speak.png'

export default function Showcase2() {
    return (
        <div>
            <div className={Showcase2CSS.container}>
                <div className={Showcase2CSS.grid}>
                    <div class={Showcase2CSS.grid1}>
                            <h2 class={Showcase2CSS.f2}>BUT SOMETIMES WE NEED A LITTLE PUSH!
                            </h2>
                            <p class={Showcase2CSS.f22}>Your Timeline is unique. It only shows the people YOU have crossed paths with. But don’t expect a Crush to fall from the sky. Take action!</p>
                            <p class={Showcase2CSS.f222}>Like the profiles that catch your eye. If the feeling is mutual, it’s a Crush! The rest is up to you. Write to impress, get to know each other and meet up!</p>
                    </div>

                    <div class={Showcase2CSS.grid2}>
                        <img className={Showcase2CSS.speak} src={speak} alt="" /> 
                        <h1 class={Showcase2CSS.f1}>Real Conversations</h1>
                        <p class={Showcase2CSS.f11}>Skip the small talk and spark meaningful conversation!</p>
                    </div>

                </div>
            </div>
                
        </div>
     
            
    )
}
