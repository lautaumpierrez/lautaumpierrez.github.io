/* eslint-disable */
import React from 'react';
import '../assets/components/styles/navbar.scss';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
class Navbar extends React.Component{
  componentDidMount(){
    this.props.setHeight(document.getElementById('navbarLautaroItems').offsetHeight);
    document.onresize = ()=>this.props.setHeight(document.getElementById('navbarLautaroItems').offsetHeight);
  }
  goHome: Function = ()=>{
    this.props.push('/');
  }
  render(){
    let {goHome}= this;
    return(
      <div className="lauta-navbar">
        <div className="level navbar-items" id="navbarLautaroItems">
          <div className="level-left">
            <div className="level-item">
              <button onClick={goHome} className="is-hidden-touch is-outlined  button lauta-navbar-item navbar-title">
                <span>
                 <span>
                   <span>LU</span>
                 </span>
                </span>
              </button>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item has-text-centered">
              <center>
                <NavLink activeClassName="actualPage" to="/biography" className="is-outlined  button lauta-navbar-item btn">
                  <span>
                   <span>
                     <span>BIOGRAFÍA</span>
                   </span>
                  </span>
                </NavLink>
                <NavLink activeClassName="actualPage" to="/portfolio" className="is-outlined  button lauta-navbar-item btn">
                  <span>
                   <span>
                     <span>PORTAFOLIO</span>
                   </span>
                  </span>
                </NavLink>
                <NavLink activeClassName="actualPage" to="/contact" className="is-outlined  button lauta-navbar-item btn">
                  <span>
                   <span>
                     <span>CONTACTO</span>
                   </span>
                  </span>
                </NavLink>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Navbar.propTypes = {
  push: PropTypes.func.isRequired
}
export default Navbar;
