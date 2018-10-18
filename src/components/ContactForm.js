import React from 'react';

const ContactForm = (props) => {

  const maker = props.maker;

  return(
    <div className="contact-container">
      <h1 className="contact-title">¿Quieres trabajar conmigo? Envíame un mensaje!</h1>
      <form
        id="contact-form"
        action={`https://formspree.io/${maker.email}`}
        method="POST">
        <div className="form-group">
          <label for="name">Nombre</label>
          <input
            type="text"
            name="Nombre"
            className="form-control"
            id="name" />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="_replyto"
            className="form-control"
            id="email"
            aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label for="message">Mensaje</label>
          <textarea
            className="form-control"
            name="Mensaje"
            rows="5"
            id="message">
          </textarea>
        </div>
        <button type="submit" className="submit">Enviar</button>
        <input type="hidden" name="_next" value="/" />
        <input type="hidden" name="_subject" value={`New submission for ${maker.name}!`} />
        <input type="hidden" name="_cc" value="a.gzzart@hotmail.com" />
      </form>
    </div>
  );
}

export default ContactForm;
