import React from "react";
import Heading from "./Heading";

export default function Cycle() {
  return (
    <section id="cycle">
      <Heading text="Development cycles are spinning faster than ever..."/>
      <div className="row">
        <div className="col-lg-6">
          <img src="/images/devops.svg" className="cycle-img" alt="cycle-img"></img>
        </div>
        <div className="col-lg-6">
          <p className="cycle-subtitle">
            With everything from doorbells to rockets running on code, it's more
            important than ever to ensure quality code is being delivered with
            every release.
          </p>
          <p className="cycle-subtitle">
            Code coverage is one of the most important metrics companies rely on
            to ship healthier code, faster, and with less risk.
          </p>

          <p className="cycle-subtitle">
            Codecov gives companies actionable coverage insights when and where
            they need them to ensure they are shipping quality code.
          </p>
        </div>
      </div>
    </section>
  );
}
