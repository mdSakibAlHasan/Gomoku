import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import { FaRegPlayCircle } from "react-icons/fa";
import gomuko from "../images/gom4.jpeg";

const Homepage = () => {
  return (
    // <body>
    <div className ="body "style={{height: "100vh" }}>
      <div className="container">
        <div >
          <div style={{ marginTop: "20px" }}>
            <h1 style={{color:"white"}}>
              Welcome to Play
            </h1>
            <img
            class="img-responsive"
              src={gomuko}
              alt="Gomukoo"
              id="logo"
            />
              <div class="center-container">
                <Link to="/board">
                  <button className="btnd">Start</button>
                </Link>
              </div>
           

          </div>
        </div>
      </div>
    </div>
    // </body>
  );
};

export default Homepage;
