import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Language from "./Language";
import Divider from "./Divider";

export default function Header() {
  return (
    <section className="coloured-section animate fadeInDown one" id="title">
      <div className="container-fluid">
        <Navbar />
        <Title />
        <Language />
        <Divider/>
      </div>
    </section>
  );
}
