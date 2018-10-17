import React from 'react';

const Abilities = (props) => {

  const abilities = props.abilities;

  return (
    <div className="abilities-container">
      {
        abilities.map((i) => {
          switch (i) {
            case 1:
              return (<img className="ability" src="images/diseno.png" key={i} alt="Habilidad de Diseño"/>);
              break;
            case 2:
              return (<img className="ability" src="images/materiales.png" key={i} alt="Habilidad de Prototipado"/>);
              break;
            case 3:
              return (<img className="ability" src="images/progra.png" key={i} alt="Habilidad de Programación"/>);
              break;
            case 4:
              return (<img className="ability" src="images/electronica.png" key={i} alt="Habilidad de Electrónica"/>);
              break;
            default:
              return null;
          }
        })
      }
    </div>
  )
}

export default Abilities;
