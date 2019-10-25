import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Accordion, Container, Row, Col, Image, CardDeck, Card } from 'react-bootstrap';
import SrikanthMgb from '../images/SrikanthMgb.jpg'
import PrabhuSridharan from '../images/PrabhuSridharan.jpg'
import MgmtExp from '../images/svg/MgmtExp.svg'


const About = () => {
    return (
        <div title="Click on about us tab for more info.">
            
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                       <h4 className="aboutusHeader">About US</h4>
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <Container><img src={MgmtExp} class="img-fluid"></img></Container> </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>

            <div class="media" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                <img src={SrikanthMgb} class="img-thumbnail" alt="..."></img >
                <div class="media-body">
                    <h4 className="names">Srikanth MGB</h4>
                    <h5 class="mt-0">Founder & Managing Director – ChargeXO Group</h5>
                    <p>Srikanth is founder of Venture Partners outfit in Singapore as a General Partner (GP) for technology investments in Asia. He has contributed to Consumer Technologies in Mobility and Enterprise Technologies in Health Care industries. Electric Vehicles, ESS for Renewables & Smart Grids are of primary interest and to drive the growth in India and for export markets is the key focus.</p>
                    <p>He is firm believer of Active Investment Style, Partnership & Collaboration and Services Model. He has experience in Private Equity, Venture Capital & Project Management as a Venture Partner and worked with Private & Investment Banks in Singapore & Dubai for more than a decade under International brands Standard Chartered Bank and HSBC before starting entrepreneurship journey in the year 2017.</p>
                </div>
            </div>
            <div class="media">
                <div className="resize"><img src={PrabhuSridharan} class="img-thumbnail" alt="..."></img ></div>
                <div class="media-body extend">
                    <h4 className="names">Prabhu Sridharan</h4>
                    <h5 class="mt-0">Founder & Executive Director – ChargeXO Group</h5>
                    <p>Prabhu is a serial entrepreneur experienced in technology & manufacturing management, business development and government affairs. Through his holding company, Biometronic Pte. Ltd. (Singapore), he has been instrumental for overall growth of iris based biometric technology in the Aadhaar Program for over a decade. One of his prominent venture is Suyin Optronics Pvt. Ltd., India’s first Camera module manufacturing facility, in partnership with Suyin Group of Taiwan.</p>
                    <p>Driven by the passion in achieving transparency through technology, a boundless opportunity for growth within these technologies and its accompanying monumental opportunities, he has been the driving force to be a bridge for technology-based alliances to seamlessly enter India through strong partnerships and ensuring that core manufacturing of technology is achieved for Make in India program.</p>
                </div>
            </div>



        </div>

    )
}
export default About