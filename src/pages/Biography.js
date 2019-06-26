import React, { Component } from 'react';
import Container from '../components/container';
import Navbar from '../components/navbar';
class BiographyPage extends Component {
  state = {
    navbarHeight: 50
  };
  setHeight: Function = (navbarHeight)=>{
    this.setState({
      navbarHeight
    });
    console.log(navbarHeight);
  }
  render(){
    let {state:{navbarHeight}, setHeight, props:{history:{push}}} = this;
    return(
      <div className="BiographyPage">
        <Navbar setHeight={setHeight} push={push}></Navbar>
        <Container type='is-dark' particles={false}>
          <div className='container'>
            <div className="content animated fadeIn" style={{marginTop: navbarHeight}} >
              <h1 className="title has-text-white is-2 extra-bold">BIOGRAFÍA</h1>
              <br/>
              <p>
                Soy un ingeniero de software Uruguayo que vive en el departamento de Maldonado. También soy estudiante de diseño de UI y UX.
                <br/><br/>
                Mi conocimiento gira entorno al desarrollo de aplicaciones web y del lado del servidor en Javascript, especificamente escritas en ReactJS, VueJS y ExpressJs.
                <br/><br/>
                En cuanto a equipos de trabajo puedo decir que me motiva muchísimo el hecho de trabajar en conjunto (diseñadores y programadores) para hacer posible un producto.              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default BiographyPage;
