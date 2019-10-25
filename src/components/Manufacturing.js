import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import CellManu from '../images/CellManufacturing.png';
import MixerAnode from '../images/svg/Manufacturing/MixerAnode.svg'
import MixerCathode from '../images/svg/Manufacturing/MixerCathode.svg'
import CoatingAnode from '../images/svg/Manufacturing/CoatingAnode.svg'
import CoatingCathode from '../images/svg/Manufacturing/CoatingCathode.svg'
import CalenderingAnode from '../images/svg/Manufacturing/CalenderingAnode.svg'
import CalenderingCathode from '../images/svg/Manufacturing/CalenderingCathode.svg'
import SlitteringAnode from '../images/svg/Manufacturing/SlitteringAnode.svg'
import SlitteringCathode from '../images/svg/Manufacturing/SlitteringCathode.svg'
import RollFormation from '../images/svg/Manufacturing/RollFormation.svg'
import ElectrolyteFilling from '../images/svg/Manufacturing/ElectrolyteFilling.svg'
import ChargeDischarge from '../images/svg/Manufacturing/ChargeDischarge.svg'
import Degassing from '../images/svg/Manufacturing/Degassing.svg'
import ChargeDis from '../images/svg/Manufacturing/ChargeDis.svg'
import Aging from '../images/svg/Manufacturing/Aging.svg'

const Manufacturing = () => {
    return (
        <Container>
        <div><h3 className="text-center">Cell Manufacturing</h3>
        
        <img src={CellManu} class="img-thumbnail" ></img>
       
        </div>
        </Container>

    )
}

export default Manufacturing