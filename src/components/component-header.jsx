import React from 'react';
import Logo from '../hd logo.jpg';

const Header = () => (
  <div className="header">
      <a href="http://localhost:3000/">
        <img alt="" src={Logo} className="app-logo" />
      </a>
        <h1>Welcome to REvaluation</h1>

  </div>
);

export default Header;
