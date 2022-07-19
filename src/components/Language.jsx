import React from "react";

export default function Language(){
    return <section id="languages">
        <p className="lang-heading">
            10+ PROGRAMMING LANGUAGES ARE ALREADY USED BY US
        </p>
        <div className="row">
            <div className="col-4 col-lg-2">
                <img className="pimg" src="/images/c.png" alt="C"></img>
            </div>
            <div className="col-4 col-lg-2">
                <img className="pimg" src="/images/c++.png" alt="C++"></img>
            </div>
            <div className="col-4 col-lg-2">
                <img className="pimg" src="/images/java.png" alt="Java"></img>
            </div>
            <div className="col-4 col-lg-2">
                <img className="pimg" src="/images/python.png" alt="Python"></img>
            </div>
            <div className="col-4 col-lg-2">
                <img className="pimg" src="/images/dart.svg" alt="Dart"></img>
            </div>
            <div className="col-4 col-lg-2">
                <img className="pimg" src="/images/js.png" alt="Javascript"></img>
            </div>
        </div>
    </section>;
}