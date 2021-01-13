import React from 'react';
import './HeroUi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import img1 from '../Assists/din.JPG';


const HeroUi = () => {
  return (
    <div className="ui-main-container">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <div className="hero-text-container">
              <div className="hero-profile-img">
                <img src={img1} alt="" className="hero-img" />
              </div>
              <h1 className="hero-name">I'm Dinislam</h1>
              <h3 className="hero-title">Front-End Web Developer</h3>
              <p className="hero-dis">A web frontend web developer focused on crafting great web experiences.Designing and coding have been my passion since the days.I started working with computers but i found myself into web development since 2019.I enjoy develop beautiful designed,Intuitive and functional web app. </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroUi;