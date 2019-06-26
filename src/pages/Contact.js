import React, { Component } from 'react';
import Container from '../components/container';
import Navbar from '../components/navbar';

class ContactPage extends Component {
  state = {
    navbarHeight: 50,
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
      <div className="ContactPage">
        <Navbar setHeight={setHeight} push={push}></Navbar>
        <Container type='is-dark' particles={false}>
          <div className='container'>
            <div className="content animated fadeIn" style={{marginTop: navbarHeight}}>
              <form action="//formspree.io/lauta.guillermo@gmail.com" method="POST">
                <div className="columns is-multiline">
                  <div className="column is-6">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" className="input"/>
                  </div>
                  <div className="column is-6">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="_replyto" type="text" className="input"/>
                  </div>
                  <div className="column is-12">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" name="_subject" className="input"/>
                  </div>
                  <div className="column is-12">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" className="input"/>
                  </div>
                </div>
                <center>
                  <button type="submit" name="submit" className="btn button">
                    <span>
                     <span>
                       <span>ENVIAR</span>
                     </span>
                    </span>
                  </button>
                </center>
              </form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default ContactPage;
