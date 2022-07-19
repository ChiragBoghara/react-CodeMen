import React from "react";

export default function FooterBox(props) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 footer-box">
      <h6>{props.title}</h6>
      {props.sections.map(function (section) {
        return (
          <p>
            <a href="/">{section}</a>
          </p>
        );
      })}
    </div>
  );
}
