import React from 'react';
import Makers from '../data.js';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

class Profile extends React.Component {

  findMaker(makerId) {
    return Makers.find(maker => makerId === maker.id)
  }

  render() {
    const makerId = this.props.match.params.id
    const maker = this.findMaker(makerId);
    return(
      <div>
        <Navbar />
        <div className="profile-container">
          <img className="profile-img" src={`/images/${maker.img}`} alt="Imagen de Perfil"/>
          <div className="profile-info">
            <h1 className="profile-name">{maker.name}</h1>
            <p className="profile-message">{maker.mensaje}</p>
            <p><strong>Carrera:</strong> {maker.carrera}</p>
            <p><strong>Perfil:</strong></p>
            <ul className="profile-list">
              {
                maker.perfil.map((perfil, index) => (
                  <li key={index} className="profile-perfil">{perfil}</li>
                ))
              }
            </ul>
            <p><strong>Datos de Contacto:</strong></p>
            <ul className="profile-list">
              <li className="profile-contacto">Correo electrónico: {maker.email}</li>
              <li className="profile-contacto">Celular: {maker.celular}</li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </div>
    );
  }
}

export default withRouter(Profile);
