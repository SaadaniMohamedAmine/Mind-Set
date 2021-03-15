import React from 'react'
import { MDBCard,MDBCardBody,MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import '../App.css'

const Info = () => {
    return (
        <div style={{padding:"3rem 1rem"}} className="info-page">
          
  <MDBRow>
      <MDBCol  >
      <MDBCard className="card-info">
            <MDBCardBody>
              <form >
                <p className="h4 text-center py-2">Write to Us</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                   label="Subject"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your message"
                     icon="pencil-alt"
                    group
                    type="text"
                    validate
                  />
                </div>
                <div className="text-center py-1 mt-3">
                <MDBBtn outline color="secondary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
   
      </MDBCol>
  </MDBRow>
    
           

        </div>
    )
}

export default Info
