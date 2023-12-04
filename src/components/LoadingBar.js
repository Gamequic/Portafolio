import React from 'react';
import './LoadingBar.css'

const LoadingBar = ({ width, color, logo, fontColor }) => {
    return (
      <div className='loadingContainer' >
        <div className='loadingMargin'>
          <div style={{ '--width': width, backgroundColor: color }} className='loadingContent'>
            <p style={{color: fontColor}}>{width}</p>
          </div>
        </div>
        <img className='loadingLogo' src={logo} />
      </div>
    );
};

export default LoadingBar;
