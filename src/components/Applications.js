import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Container, Row, Col, Image, CardDeck, Card } from 'react-bootstrap';
import Application from '../images/svg/Applications/Applications.svg'


const Applications = () => {
    return (
        <div>
       <Image src={Application} className="rounded mx-auto d-block"></Image>
        </div>
    )
}
export default Applications