import React from 'react';
import Logo from '../hd-logoRE.png';
import '../app.css';

const Header = () => (
  <div className="topnav">
      <img alt="" src={Logo} className="app-logo" />
      <h4><a className="active topnav-title" href="/">REvaluate</a></h4>
      <div className="push">
          <h3><a href="applications">Applications</a></h3>
      </div>
      <div className="from-end">
      <h3><a href="sres">Sres</a></h3>
      </div>
  </div>

);

export default Header;
