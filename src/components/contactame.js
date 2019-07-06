import React from 'react';
import '../assets/styles/contactame.scss'
export default ()=>(
  <div className="ContactameSectionComponent">
    <p className="title is-4 has-text-weight-bold" style={{marginLeft: 10}}>Contactame</p>
    <div className="contenedor">
      <div className="box">
        <div className="columns is-multiline">
          <div className="column is-6">
            <div className="father-to-center">
              <div className="child-to-center">
                <p className="title is-2 has-text-weight-normal">
                  <div className="level is-mobile" style={{width: '170px'}}>
                    <div className="level-item">
                      <img src={require('../assets/svg/grinning.svg')} alt=""/>
                    </div>
                    <div className="level-item">
                      ¡Hola!
                    </div>
                  </div>
                </p>
                <p>
                  Que genial que hayas llegado hasta acá! Estoy preparado para Llevar tu proyecto al siguiente nivel
                </p>
                <br/>
                <p className="subtitle">Dejame un mensaje </p>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="father-to-center">
              <div className="child-to-center">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=598098115938&text=Hola%21%20Quisiera%20contactarme%20con%20Lautaro%20Umpierrez">
                  <button className="btn level-item" style={{backgroundColor: '#2ecc71'}}>
                    <div className="level is-mobile">
                      <div className="level-item">
                        <img src={require('../assets/svg/whatsapp.svg')} style={{filter:'invert(100%)',width: 20}} alt=""/>
                      </div>
                      <div className="level-item">
                         &nbsp; Whatsapp
                      </div>
                    </div>
                  </button>
                </a>
                <br/>
                <a href="mailto: lauta.guillermo@gmail.com">
                  <button className="btn level-item" style={{backgroundColor: '#e74c3c'}}>
                    <div className="level is-mobile">
                      <div className="level-item">
                        <img src={require('../assets/svg/gmail.svg')} style={{filter:'invert(100%)',width: 20}} alt=""/>
                      </div>
                      <div className="level-item">
                         &nbsp; Mail
                      </div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <center>
          <div className="social-network">
            <a href="https://github.com/lautaumpierrez" target="_blank">
              <img src={require('../assets/svg/github-logo.svg')} alt="Github [lautaumpierrez]"/>
            </a>
          </div>
          <div className="social-network">
            <a href="https://instagram.com/lautaumpierrez" target="_blank">
              <img src={require('../assets/svg/instagram.svg')} alt="Instagram [lautaumpierrez]"/>
            </a>
          </div>
          <div className="social-network">
            <a href="https://twitter.com/lautaumpierrez" target="_blank">
              <img src={require('../assets/svg/twitter.svg')} alt="Twitter [lautaumpierrez]"/>
            </a>
          </div>
        </center>
      </div>
    </div>
    <br/>
    <hr/>
  </div>
);
