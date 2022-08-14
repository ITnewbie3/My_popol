import React from 'react';
import './style.css'
import { Typing } from 'typing-effect-reactjs';

const Main = () => {
    return (
        <div id = 'maindiv'>
            <video src='./img/Clouds.mp4' loop muted autoPlay />
            <div id='typing'>
                
               <p><Typing 
               text={[ "Welcome To My Hompage",
                    "Thank You For Your Watching"]
                    }
               typeSpeed={200}
               deleteSpeed={100}
               smartBackspace
               
               styleClass={'type'}
               />
               </p>
               <span>DEVELOPER PORTFOLIO</span>
            </div>
        </div>
    );
};

export default Main;