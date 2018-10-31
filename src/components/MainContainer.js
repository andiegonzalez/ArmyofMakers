import React from 'react';
import makers from '../data.js';
import Abilities from './Abilities.js';
import { Link } from 'react-router-dom';

class MainContainer extends React.Component {
  render() {
    const lieutenant = makers.find(maker => maker.id === '14')
    const makersList = makers.filter(maker => maker.id !== '14')

    return(
      <div className="container">
        <h1 className="makers-title">Lieutenant</h1>
        <Link to={`/profile/${lieutenant.id}`}
          className="maker-container">
          <img className="maker-img" src={`./images/${lieutenant.img}`} alt="Imagen de Perfil de Teniente"/>
          <h3 className="maker-name">{lieutenant.name}</h3>
        </Link>
        <h1 className="makers-title">The Makers</h1>
        <div className="grid-container">
          {
            makersList.map(maker => {
              return (<Link to={`/profile/${maker.id}`}
                className="maker-container"
                key={maker.id}>
                <img className="maker-img" src={`./images/${maker.img}`} alt="Imagen de Perfil de Maker"/>
                <h3 className="maker-name">{maker.name}</h3>
                <Abilities abilities={maker.abilities} />
              </Link>)
            })
          }
        </div>
      </div>
    )
  }
}

export default MainContainer;
