import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to='/' className="nav-link">
          <img src="/images/logo.png" className="nav-img" alt="Army of Makers Logo" />
        </Link>
        <div>
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/projects' className="nav-link">Proyectos</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
