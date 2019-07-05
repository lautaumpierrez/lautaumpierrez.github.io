import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/project.scss';
const Project =({btnColor, name, image, link, withBorder})=>(
  <div className="ProjectCardComponent" style={{border:(withBorder ? '2px solid rgb(240,240,240)' : null),backgroundImage: `url(${image})`}}>
    <div className="contenedor">
      <a href={link} target="_blank">
        <button className="btn" style={{backgroundColor: btnColor}}>{name}</button>
      </a>
    </div>
  </div>
);
Project.propTypes = {
  name: PropTypes.string.isRequired,
  btnColor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  withBorder: PropTypes.bool
};
Project.defaultProps={
  link: "",
  withBorder: false,
}
export default Project;
