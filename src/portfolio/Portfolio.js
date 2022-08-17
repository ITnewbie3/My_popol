import React from 'react';
import Contents1 from './Contents1';
import Contents2 from './Contents2';
import Contents3 from './Contents3';
import Contents4 from './Contents4';
import Contents5 from './Contents5';
import Zoom from 'react-reveal/Zoom'; 
import Fade from 'react-reveal/Fade'
import './style.css'
const Portfolio = () => {
    return (
        <div>
            <Zoom><Contents1/></Zoom>
            <Fade bottom><Contents2/></Fade>
            <Fade left><Contents3/></Fade>
            <Fade bottom><Contents4/></Fade>
            {/* <Fade left><Contents5/></Fade> */}
        </div>
    );
};

export default Portfolio;