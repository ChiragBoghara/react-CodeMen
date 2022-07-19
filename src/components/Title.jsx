import React from "react";
import Button from "./Button";

export default function Title() {
  return (
    <div className="row title">
      <div className="col-lg-6">
        <h1 className="big-heading">
          Grow your business with CodeMen
          <span className="color-pink">.</span>
        </h1>
        <h6 className="small-heading">We are team of talented developers.</h6>

        <div className="btn-group">
          <Button content="Get Started" bgColor="#212529" />
          <Button content="Schedule a demo" bgColor="#f07" />
        </div>
      </div>

      <div className="col-lg-6">
        <div className="expandedImg">
        <img
          className="title-img"
          src="/images/pull-request-comments.svg"
          alt="iphone-mockup"
        />
        </div>
      </div>
    </div>
  );
}
