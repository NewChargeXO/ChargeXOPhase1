import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
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
        
            <div class="d-flex flex-row bd-highlight mb-3">
                <div class="p-2 bd-highlight">Anode</div>
                <div class="p-2 bd-highlight"><Image src={MixerAnode}></Image></div>
                <div class="p-2 bd-highlight"><Image src={CoatingAnode}></Image></div>
                <div class="p-2 bd-highlight"><Image src={CalenderingAnode}></Image></div>
                <div class="p-2 bd-highlight"><Image src={SlitteringAnode}></Image></div>
                <div class="d-flex align-items-stretch"><Image src={RollFormation}></Image></div>
            </div>
            <div class="d-flex flex-row bd-highlight mb-3">
                <div class="p-2 bd-highlight">Cathode</div>
                <div class="p-2 bd-highlight"><Image src={MixerCathode}></Image></div>
                <div class="p-2 bd-highlight"><Image src={CoatingCathode}></Image></div>
                <div class="p-2 bd-highlight"><Image src={CalenderingCathode}></Image></div>
                <div class="p-2 bd-highlight"><Image src={SlitteringCathode}></Image></div>
            </div>
            <div class="d-flex flex-row-reverse bd-highlight">
            <div class="d-flex align-items-stretch"><Image src={ElectrolyteFilling}></Image></div>
            <div class="d-flex align-items-stretch"><Image src={ChargeDischarge}></Image></div>
            <div class="d-flex align-items-stretch"><Image src={Degassing}></Image></div>
            <div class="d-flex align-items-stretch"><Image src={ChargeDis}></Image></div>
            <div class="d-flex align-items-stretch"><Image src={Aging}></Image></div>
                
            </div>
        </Container>

    )
}

export default Manufacturing