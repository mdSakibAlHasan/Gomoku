import React from 'react'
import { Link } from "react-router-dom";
import './homePage.css';
import { FaRegPlayCircle } from "react-icons/fa";
import gomuko from '../images/gom4.jpeg'

const Homepage = () => {
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-6" style={{margin:"20px"}}>
                    <h1>Welcome to Play..</h1>
                    <img src={gomuko} alt="Gomukoo" id="logo"/>
                    {/* <img src="chess.png" alt="board" id="board"/> */}
                    <Link to="/board"><button class="btnd">PLAY <FaRegPlayCircle /></button></Link>

                </div>
                {/* <div class="col-6">
                    <Link to="/board"><button class="btnd">PLAY <FaRegPlayCircle /></button></Link>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Homepage;

