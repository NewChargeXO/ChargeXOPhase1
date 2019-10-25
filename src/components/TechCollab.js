import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Container, Row, Col, Image, CardDeck, Card } from 'react-bootstrap';
import TechCollabImg from '../images/svg/TechCollaboration.svg'


const TechCollab = () => {
    return (
        <div>
       <Image src={TechCollabImg} className="rounded mx-auto d-block"></Image>
        </div>
    )
}
export default TechCollab