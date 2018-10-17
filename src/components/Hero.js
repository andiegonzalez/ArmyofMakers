import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => (
  <div className="hero">
		<Link to={'/'} >
			<img className="logo" src="/images/logo.png" alt="logo armyofmakers"/>
		</Link>
    <i className="fas fa-chevron-down"></i>
  </div>
)

export default Hero;
