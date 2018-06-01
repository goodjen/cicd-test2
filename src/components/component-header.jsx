import React from 'react';
import Logo from '../hd-logoRE.png';

const Header = () => (
  <div className="header">
      <a href="http://localhost:3000/">
        <img alt="" src={Logo} className="app-logo" />
      </a>
        <h4>REvaluate</h4>

  </div>
);

export default Header;
