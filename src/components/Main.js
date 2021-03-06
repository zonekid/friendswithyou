import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BackgroundSlider from 'react-background-slider';

import Background from '../components/Background';
import Portfolio from '../components/Portfolio';
import Press from '../components/Press';
import About from '../components/About';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Port = styled.div `
@media (max-width: 575px) {
  padding-top:80px;

}


`


class Main extends Component {
    state = {  }
    render() { 
        return (  
<div>
<div id="home">
 <Port><Background/></Port>
 </div>
 <div id="about">
 <About/>
 </div>
 <div id="portfolio">
 <Portfolio/>
 </div>
 <div id="blog">
 <Blog/>
 </div>
 <div id="press">
 <Press/>
 </div>
 <div id="contact">
 <Contact/>
 </div>
</div>

        );
    }
}
 
export default Main;