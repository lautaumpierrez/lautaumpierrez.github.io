import React from 'react';
import '../assets/styles/header.scss';
import MyImage from './my-image';
export default ()=>(
  <header className="HeaderComponent">
    <div className="shapes">
        <div></div>
        <div></div>
    </div>
    <div className="top-layer">
      <div className="information">
        <div className="columns">
          <div className="column is-6">
            <center>
              <MyImage></MyImage>
            </center>
          </div>
          <div className="column is-6">
            <div className="container">
            <p className="title is-1">Hola, soy Lautaro</p>
            <p className="subtitle">
              <b>Fullstack</b> Developer, listo para llevar tus
              proyectos <br/> al siguiente nivel
            </p>
            <button className="btn" style={{marginRight: 20,backgroundColor: '#2ecc71'}}>Whatsapp</button>
            <button className="btn" style={{backgroundColor: '#e74c3c'}}>Mail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
