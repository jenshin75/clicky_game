import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() =>
          props.handleClick(props.id)} 
          // className="remove" 
          alt={props.name} src={props.image}/>
      </div>
      <div className="content">{props.id}
        {/* <ul>
          <li>
            <strong>ID: </strong> {props.id}
          </li> */}
          {/* <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li> */}
        {/* </ul>  */}
      </div>
    </div>
  );
}

export default FriendCard;
