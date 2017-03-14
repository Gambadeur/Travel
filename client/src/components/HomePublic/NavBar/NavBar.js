import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

    // inserer fonction js avec syntaxe REACT
  render() {

    return (
    <div className="navbar">
      <a href="">
      <div className="navbar-right">
          <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
          <div><p>Sign-up/Log-in</p></div>
      </div>
       </a>
    </div>

    );
  }


}


export default NavBar;
