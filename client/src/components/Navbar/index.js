import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css";

function Navbar1(props) {
  return (
    <nav className="nav">
      <ul>
        <li>Your Score: {props.score}</li>
        <li>Top Score: {props.topscore}</li>
      </ul>
    </nav>
  )
}
export default Navbar1;
