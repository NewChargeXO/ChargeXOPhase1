import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Container, Row, Col, Image, CardDeck, Card } from 'react-bootstrap';
import Cell from '../images/svg/Cell.svg';
import Module from '../images/svg/Module.svg';
import BatteryPack from '../images/svg/BatteryPack.svg';
import EV from '../images/svg/Applications/EV.svg';
import Stationary from '../images/svg/Applications/Stationary.svg';
import Retail from '../images/svg/Applications/Retail.svg';


const Applications = () => {
    return (
        <div>
        <Row><Col><h4 className="myApp">ChargeXO</h4></Col><Col><h4 className="myApp">Industries</h4></Col><Col><h4 className="myApp">Applications</h4></Col></Row>
        <Row><Col className="parent"><span class="child">Cell</span><Image src={Cell} className="rounded mx-auto d-block"></Image></Col><Col><div class="circle">Electric Vehicles</div></Col><Col><Image src={EV}></Image></Col></Row>
        <Row><Col className="parent"><span class="child">Module</span><Image src={Module} className="rounded mx-auto d-block"></Image></Col><Col><div class="circle stationary">Stationary Industries</div></Col><Col><Image src={Stationary}></Image></Col></Row>
        <Row><Col className="parent"><span class="child">BatteryPack </span><Image id="batteryImg" src={BatteryPack} className="rounded mx-auto d-block"></Image></Col><Col><div class="circle Retail">Retail</div></Col><Col><Image src={Retail}></Image></Col></Row>
        </div>
    )
}
export default Applications