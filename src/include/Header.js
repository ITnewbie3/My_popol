import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
    useEffect(()=>{
        let timer = setTimeout(()=>{        
            document.querySelector('header').classList.add('on') }, 4000);
      });
    return (
        <header>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/aboutme"><li>About me</li></Link>
                <li>Last Career</li>
                <li>Q*A</li>
                <li>Contents</li>
            </ul>
        </header>
    );
};

export default Header;