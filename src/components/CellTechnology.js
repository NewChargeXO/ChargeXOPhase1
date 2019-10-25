import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import { Container, Row, Col, Image, CardDeck, Card } from 'react-bootstrap';
import CellTechImg from '../images/CellTechnology.gif'
import LFP from '../images/svg/LFP.svg'
import NMC from '../images/svg/NMC.svg'
import left from '../images/svg/left.svg'
import right from '../images/svg/right.svg'

const CellTechnology = () => {
    return (
        <Container><h3 className="text-center">Cell Technology</h3>
            <Row>
                <Col xs={12} md={4}>
                    <div class="media-body">

                        <b className="text-primary">1.Anode (Graphite)
:</b> <p className="pAnode">The anode (or negative electrode) in Lithium-ion battery is typically made up of Graphite, coated on Copper Foil. Graphite is a crystalline solid with a black/grey color and a metallic sheen. It’s a reducing electrode that releases electrons to the external circuit and oxidizes during the electrochemical reaction.</p>

                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <img src={CellTechImg} class="img-thumbnail" alt="..."></img>
                </Col>
                <Col xs={12} md={4}>
                    <div class="media-body">

                        <b className="text-primary">2.Electrolyte (Lithium Salts)
</b> <p className="pElectrolyte">Plays a key role in transporting the positive lithium ions between the cathode and anode. High purity electrolytes are a core component of li-ion batteries. The most commonly used electrolyte is comprised of lithium salt, such as LiPF6 in an organic solution.
</p>
                    </div>
                </Col>

            </Row>

            <Row>

                <Col xs={12} md={4}>
                <h5 className="text-center text-primary">LFP </h5>
                    <img src={LFP} class="img-thumbnail"></img>
                </Col>
                <Col xs={12} md={4} >
                    <div class="media-body">
                        <p class="pCathode" ><b className="text-primary">3.Cathode (LFP vs NMC):</b> The cathode is the positively charged electrode, which is an oxidizing electrode that acquires electrons from the external circuit and is reduced during the electrochemical reaction</p>
                        <p><h5 className="text-info"><b>Comparison of Cathode Chemistry</b></h5>

                        </p>

                       
                    </div>
                    <div class="d-flex flex-row bd-highlight mb-3">
                        <div class="p-2 bd-highlight"><h5 className="text-center text-primary">LFP </h5><img src={left}></img></div>
                        <div class="p-2 bd-highlight"><h5 className="text-center text-primary">          vs       </h5></div>
                        <div class="p-2 bd-highlight"><h5 className="text-center text-primary">NCM<sub>111</sub></h5><img src={right}></img></div>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                <h5 className="text-center text-primary">NCM<sub>111</sub></h5>
                    <img src={NMC} class="img-thumbnail"></img>
                </Col>

            </Row>
        </Container>



    )
}

export default CellTechnology