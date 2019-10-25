import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import logoChar from '../images/svg/logo.svg'
import CoreTech from '../images/svg/CoreTech.svg'
import BusinessTech from '../images/svg/BusinessTech.svg'
import Lithium from '../images/LithiumIon.GIF'

const About = () => {
  return (
    <div class="container">
      <div className="row">
        <div class=" col-xs-12 col-md-12 mt-2">
          <div  class="animated rollIn"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-6 mt-4">
          <div class="card backShadow rightMove">
            <img src={CoreTech} class="card-img-top" alt="..." />
            <div class="card-body">
              <p></p>
              <p class="card-text">ChargeXO is developing the R&D and manufacturing capabilities of full industry chains in vehicle and energy storage batteries field.
This includes materials, battery cells, battery management systems, battery recycling and reuse.






</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 mt-4">
          <div class="card backShadow leftMove">
            <img src={BusinessTech} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text"><b>Vision:</b> To be the largest manufacturer and End-to-End solution provider of new energy storage system for Energy Conservation to contribute to greener earth. 
</p>
              <p class="card-text"><b>Mission:</b>ChargeXO is into Core Technology Manufacturing of Li-ion cells and batteries and also promote lithium energy and EV Park in India to create the entire ecosystem to drive industrial growth for EV and Energy Storage Solutions (ESS) by partnering with International Product & Technology companies for techno-manufacturing locally.  </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About