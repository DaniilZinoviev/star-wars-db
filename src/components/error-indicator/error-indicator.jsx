import React from 'react';

import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="Error"/>
      <h4 className="text-danger">An unexpted error has been occured.</h4>
      <p className="text-danger">Don't worry, we already sent some droids to fix a problem.</p>
    </div>
  )
}

export default ErrorIndicator;