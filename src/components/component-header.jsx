import React from 'react';
import Logo from '../hd-logoRE.png';
import '../app.css';

const Header = () => (
  <div className="topnav">
      <img alt="" src={Logo} className="app-logo" />
      <h4>REvaluate</h4>
        <a class="active" href="/">Home</a>
         <a href="applications">Applications</a>
         <a href="sres">Sres</a>
  </div>

);

export default Header;
