import React from "react";
import Navigator from "./NavigationBar";

export default function Card(props) {
  return (
    <div className="col-lg-4 center">
      <div className="card">
        <img className="card-img-top" src={props.imgSrc} alt="CardImage"></img>
        <div className="card-body">
          <span>{props.title}</span>
          <p class="card-text">{props.content}</p>
        </div>
        <hr className="solid"></hr>
        <Navigator text={props.navigationText} style={{textAlign:"right",marginRight: "20px",fontSize: "0.8rem",fontWeight: "700"}}/>
      </div>
    </div>
  );
}
