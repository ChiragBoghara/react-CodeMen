import React from "react";
import Cycle from "./Cycle";
import Header from "./Header";
import Features from "./Features";
import Resources from "./Resources";
import Cta from "./Cta";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
        <Header/>
        <Cycle/>
        <Features/>
        <Resources/>
        <Cta/>
        <Footer/>
    </div>
  );
}
