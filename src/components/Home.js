import React from 'react'
import frontImg from '../images/svg/frontImg.svg'
import { Container, Row, Col, Image } from 'react-bootstrap';
import CoreTech from '../images/svg/CoreTech.svg'
import BusinessTech from '../images/svg/BusinessTech.svg'
import HomeImg from '../images/svg/Home.svg'
import logoChar from '../images/svg/logo.svg'

const Home = () => {
  return (

    <div className="ChargeXOHome"><Row>
      <Col xs={12} md={6}>
        <h1 className="sense">SENSE OF SENSIBILITY</h1>


      </Col>
      <Col xs={12} md={6}>
        <img src={logoChar} id="ImgLogo" className="rounded float-right"></img>
      </Col>
    </Row></div>

  )
}

export default Home