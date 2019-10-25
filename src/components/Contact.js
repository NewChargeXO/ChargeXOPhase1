import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div class="row">
          <div class="col">
            <div class="d-flex flex-column bd-highlight">
              <div class="p-2 bd-highlight"><h2 className="myApp"> Singapore</h2>
            <p>
            1 North Bridge Road,<br></br>
            #21-06 High Street Centre,<br></br>
Singapore 179094</p></div>
              <div class="p-2 bd-highlight"><h2 className="myApp">  India</h2>
            <p>
            #402,65 Saroji Nagar,<br></br>
            Kakathiya Hills, Hyderabad,<br></br>
Telangana 50081</p></div>
              <div class="p-2 bd-highlight"><h2 className="myApp">  Service Network</h2>
            <p>
Service helpline:<br></br>
<a href="mailto:info@chargexo.com" target="_top">info@chargexo.com</a></p></div>
            </div>






          </div>
          <div class="col">


            <table>
              <h2 className="text-center">Quick Enquiry Form
</h2>
              <tbody>
                <tr>
                  <td><input type="text" class="form-control" id="txtName" placeholder="Name"></input></td>
                  <td><input type="text" class="form-control" id="txtEmail" placeholder="Email"></input></td>

                </tr>
                <tr>
                  <td><input type="text" class="form-control" id="txtCompany" placeholder="Company"></input></td>
                  <td><input type="text" class="form-control" id="txtContact" placeholder="Contact"></input></td>

                </tr>
                <tr>
                  <td><input type="text" class="form-control" id="txtDesignation" placeholder="Designation"></input></td>
                  <td><input type="text" class="form-control" id="txtReason" placeholder="Reason for contact"></input></td>

                </tr>
                <tr><td><textarea id="txtmessage" class="form-control" placeholder="Message"></textarea></td></tr>
                <tr><td><button type="button" id="btnSendEmail" class="btn btn-success">Send</button></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact