import React from 'react';
import makers from '../data.js'
import Abilities from './Abilities.js';

class MainContainer extends React.Component {
  render() {
    return(
      <div>
        <h1>Army of Makers</h1>
        {
          makers.map(maker => (
            <div className="maker-container">
              <img className="maker-img" src={`images/${maker.img}`} />
              <h1 className="maker-name">{maker.name}</h1>
              <Abilities abilities={maker.abilities} />
            </div>
          ))
        }
      </div>
    )
  }
}

export default MainContainer;
