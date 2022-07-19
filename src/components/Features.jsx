import React from "react";
import Heading from "./Heading";

export default function Features() {

  function handleFlexibleBtnClick(event) {
    const flexible = document.querySelector("#flexible");
    const seamless = document.querySelector("#seamless");
    const robust = document.querySelector("#robust");

    const flexibleBtn  = document.querySelectorAll(".circular-box")[0];
    const seamlessBtn  = document.querySelectorAll(".circular-box")[1];
    const robustBtn  = document.querySelectorAll(".circular-box")[2];
    flexibleBtn.style.backgroundColor = "#f8e3f7";
    seamlessBtn.style.backgroundColor = "#f7f2fb";
    robustBtn.style.backgroundColor = "#f7f2fb";

    flexible.classList.add("fade");
    setTimeout(function(){
      flexible.classList.remove("fade");
    },100);

    flexible.classList.add("active");
    seamless.classList.remove("active");
    robust.classList.remove("active");
  }

  function handleSeamlessBtnClick() {
    const flexible = document.querySelector("#flexible");
    const seamless = document.querySelector("#seamless");
    const robust = document.querySelector("#robust");

    const flexibleBtn  = document.querySelectorAll(".circular-box")[0];
    const seamlessBtn  = document.querySelectorAll(".circular-box")[1];
    const robustBtn  = document.querySelectorAll(".circular-box")[2];
    seamlessBtn.style.backgroundColor = "#f8e3f7";
    flexibleBtn.style.backgroundColor = "#f7f2fb";
    robustBtn.style.backgroundColor = "#f7f2fb";

    seamless.classList.add("fade");
    setTimeout(function(){
      seamless.classList.remove("fade");
    },100);
    seamless.classList.add("active");

    flexible.classList.remove("active");
    robust.classList.remove("active");
  }

  function handleRobustBtnClick() {
    const flexible = document.querySelector("#flexible");
    const seamless = document.querySelector("#seamless");
    const robust = document.querySelector("#robust");

    const flexibleBtn  = document.querySelectorAll(".circular-box")[0];
    const seamlessBtn  = document.querySelectorAll(".circular-box")[1];
    const robustBtn  = document.querySelectorAll(".circular-box")[2];
    robustBtn.style.backgroundColor = "#f8e3f7";
    flexibleBtn.style.backgroundColor = "#f7f2fb";
    seamlessBtn.style.backgroundColor = "#f7f2fb";

    robust.classList.add("fade");
    setTimeout(function(){
      robust.classList.remove("fade");
    },100);

    robust.classList.add("active");
    seamless.classList.remove("active");
    flexible.classList.remove("active");
  }

  return (
    <section id="features">
      <Heading text="How Codecov helps..." />
      <div className="row">
        <div className="col-lg-4">
          <button
            onClick={handleFlexibleBtnClick}
            className="circular-btn flexible"
          >
            <div className="row circular-box initial-btn">
              <div className="col col-2">
                <img src="/images/flexible.svg" alt="img1" />
              </div>
              <div className="col col-10">
                <p className="feature">Flexible / Unified Reporting</p>
              </div>
            </div>
          </button>

          <button
            onClick={handleSeamlessBtnClick}
            className="circular-btn seamless"
          >
            <div className="row circular-box">
              <div className="col col-2">
                <img src="/images/seamless.svg" alt="img1" />
              </div>
              <div className="col col-10">
                <p className="feature">Seamless Coverage Insights</p>
              </div>
            </div>
          </button>

          <button
            onClick={handleRobustBtnClick}
            className="circular-btn robust"
          >
            <div className="row circular-box">
              <div className="col col-2">
                <img src="/images/robust.svg" alt="img1" />
              </div>
              <div className="col col-10">
                <p className="feature">Robust Coverage Controls</p>
              </div>
            </div>
          </button>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-7">
          <div className="tab-content">
            <div id="flexible" className="container tab-pan active">
              <p>
                As long as your code has tests and your coverage tool can output
                coverage results in a <span>compatible format</span>, you can
                use Codecov.
              </p>
              <ul>
                <li>Source Code Coverage</li>
                <li>20+ Languages and CI/CD Agnostic</li>
                <li>Report Merging</li>
                <li>Coverage Isolation</li>
              </ul>
            </div>
            <div id="seamless" className="container tab-pan">
              <p>
                Codecov meets users where they are whether that is a pull
                request, through our online platform, or in your CI/CD workflow.
              </p>
              <ul>
                <li>Pull Request Comments</li>
                <li>Browser Extension</li>
                <li>Notifications</li>
                <li>Badges</li>
              </ul>
            </div>
            <div id="robust" className="container tab-pan">
              <p>
                Codecov can accommodate the most complex development
                environments with robust controls built into the platform and
                integrated directly into your code host / repos.
              </p>
              <ul>
                <li>Github Checks</li>
                <li>Commit Statuses</li>
                <li>Coverage Controls</li>
                <li>Conditional Coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


  );

  
}
