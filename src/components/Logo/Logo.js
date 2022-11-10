import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

function Logo() {
    return (
        <div style={{display: 'flex', justifyContent: 'flex-start'}} className='ma4 mt0' >
            
            <Tilt
                className="Tilt"
                glareEnable={true}
             >
            
                <div style={{ height: '150px', width: '150px' }}>
                    <h1>Face Recognition Brain</h1>
                    <img alt='logo' src={brain} height='50%'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;