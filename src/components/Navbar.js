import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to='/' className="nav-link">
          <img src="/images/logo.png" className="nav-img" alt="Army of Makers Logo" />
        </Link>
        <Link to='/' className="nav-link">Home</Link>
      </nav>
    );
  }
}

export default Navbar;
