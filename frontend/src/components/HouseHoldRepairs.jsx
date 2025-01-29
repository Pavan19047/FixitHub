import React from "react";
import "../styles/HouseHoldRepairs.css";

function Household() {
  return (
    <div>
      <h1 id="heading">Select Your Service: </h1>
      <div className="container">
        <div id="card-one" className="animation">
          <img
            className="img-card"
            src="../images/plumber.avif"
            alt="Plumber"
          />
          <h2 style={{ textAlign: "center", marginTop: 120 }}>Plumber</h2>
        </div>
        <div id="card-two" className="animation">
          <img
            className="img-card"
            src="../images/carpenter.jpg"
            alt="Carpenter"
          />
          <h2 style={{ textAlign: "center", marginTop: 120 }}>Carpenter</h2>
        </div>
        <div id="card-third" className="animation">
          <img
            className="img-card"
            src="../images/electrician.avif"
            alt="Electrician"
          />
          <h2 style={{ textAlign: "center", marginTop: 120 }}>Electrician</h2>
        </div>
      </div>
    </div>
  );
}

export default Household;
