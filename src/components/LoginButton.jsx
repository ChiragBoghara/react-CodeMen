import React from "react";

export default function LoginButton(props) {
  return (
    <div className="col-lg-4">
      <button className="login-btn">
        <img className="login-img" src={props.img} alt={props.alt}></img>
        <span>{props.alt}</span>
      </button>
    </div>
  );
}
