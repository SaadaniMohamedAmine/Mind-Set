import React from "react";
import "../App.css";
import { MDBBtn, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "5rem 1.25rem" }} className="home">
      <div className="section-home">
        <h1 style={{ width: "90vw",textAlign:"center" }}>Plans are way to success </h1>
        <MDBBtn
          color="gray"
          style={{
            border: "3px solid #9a3412",
            borderRadius: "10px",
            fontWeight: "bold",
            
          }}
        >
          <Link to="/todos" style={{ textDecoration: "none", color: "#000" }}>
            Go To plans &nbsp;&nbsp;
          </Link>
          <MDBIcon icon="location-arrow" />
        </MDBBtn>
      </div>
    </div>
  );
};

export default Home;
