import React from 'react';

class ContactForm extends React.Component {
  render() {
    return(
      <div className="contact-container">
        <form
          id="contact-form"
          method="POST">
          <div className="form-group">
            <label for="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name" />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label for="message">Mensaje</label>
            <textarea
              className="form-control"
              rows="5"
              id="message">
            </textarea>
          </div>
          <button type="submit" className="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
