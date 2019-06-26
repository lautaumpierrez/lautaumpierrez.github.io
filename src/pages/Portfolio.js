import React, { Component } from 'react';
import Container from '../components/container';
import Navbar from '../components/navbar';
import Card from '../components/card';
import Projects from '../assets/portfolio';
import WOW from 'wow.js';
class PortfolioPage extends Component {
  state = {
    navbarHeight: 50,
    projects: []
  };
  componentDidMount(){
    this.setState({projects: Projects});
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
      }
    );
    wow.init();
  }
  setHeight: Function = (navbarHeight)=>{
    this.setState({
      navbarHeight
    });
    console.log(navbarHeight);
  }
  render(){
    let {state:{navbarHeight,projects}, setHeight, props:{history:{push}}} = this;
    return(
      <div className="PortfolioPage">
        <Navbar setHeight={setHeight} push={push}></Navbar>
        <Container type='is-dark' particles={false}>
          <div className='container'>
            <div className="content animated fadeIn" style={{marginTop: navbarHeight}}>
              <h2 className="title is-2 extra-bold has-text-centered-touch ">Proyectos</h2>
              <br/>
              <div className="columns is-multiline">
                {projects.map((prj,i)=>(
                  <div className="column is-4 wow fadeInUp" data-wow-delay={`0.${i}s`} key={i}>
                    <Card {...prj}></Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default PortfolioPage;
