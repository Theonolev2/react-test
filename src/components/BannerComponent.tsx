import React from 'react';
import UserMenu from './UserMenuComponent';

const Banner = () => {
  return(
    <div className="banner d-flex flex-row justify-content-between">
      <h1>React Project</h1>
      <UserMenu/>
    </div>
  )
};

  export default Banner;
