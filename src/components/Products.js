import React from 'react'
import CellTechnology from './CellTechnology'
import LPFVsNMC from './Cell'
import { Container, Row, Col, Image, CardDeck, Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'
import CellTech from '../images/svg/CellTech.svg'
import Cell from '../images/svg/Cell.svg'
import Module from '../images/svg/Module.svg'

const Products = () => {
  return (
    <Container >
      <Row className="deckCenter">
        <Col xs={12} lg={3} md={4} className="rotateDiv">
          <NavLink to="/CellTechnology" className="CellTechDeck">
            <CardDeck>
              <Card className="text-center">

                <Card.Body>
                  <Card.Img variant="top" src={CellTech} ></Card.Img>
                  <Card.Title>Cell Technology</Card.Title>
                  <Card.Text>

                  </Card.Text>

                </Card.Body>

              </Card>
            </CardDeck>
          </NavLink></Col>
          <div className="linear"><i></i></div>
        <Col xs={12} lg={3} md={3} className="rotateDiv">
          <NavLink to="/Cell" className="CellTechDeck">
            <CardDeck>
              <Card className="text-center">

                <Card.Body>
                  <Card.Img variant="top" src={Cell} ></Card.Img>
                  <Card.Title>Cell
                  </Card.Title>
                  <Card.Text>

                  </Card.Text>

                </Card.Body>

              </Card>
            </CardDeck></NavLink></Col>
            <div className="linear"><i></i></div>
        <Col xs={12} lg={3} md={3} className="rotateDiv">
          <CardDeck>
            <Card className="text-center">

              <Card.Body>
                <Card.Img variant="top" src={Module} ></Card.Img>
                <Card.Title>Module</Card.Title>
                <Card.Text>

                </Card.Text>

              </Card.Body>

            </Card>
          </CardDeck></Col>
      </Row>
    </Container>
  )
}

export default Products