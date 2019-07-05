import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/testimony.scss';
const Testimony = ({name, image, content})=>(
  <div className="testimonyComponent">
    <div className="contenedor">
      <div className="columns">
        <div className="column is-2">
          <center>
            <img src={image} className="person-avatar" alt=""/>
          </center>
        </div>
        <div className="column is-10">
          <p className="text-content">
            {content}
            <br/>
            <b className="person-name is-pulled-right">{name}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
);
Testimony.propTypes={
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Testimony;
