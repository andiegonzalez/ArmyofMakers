import React from 'react';
import makers from '../data.js'
import Abilities from './Abilities.js';
import { Link } from 'react-router-dom';

class MainContainer extends React.Component {
  render() {
    return(
      <div className="container">
        <h1 className="makers-title"> The Makers</h1>
        <div className="grid-container">
          {
            makers.map(maker => (
              <Link to={`/profile/${maker.id}`}
                className="maker-container"
                key={maker.id}>
                <img className="maker-img" src={`./images/${maker.img}`} alt="Imagen de Perfil de Maker"/>
                <h3 className="maker-name">{maker.name}</h3>
                <Abilities abilities={maker.abilities} />
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

export default MainContainer;
