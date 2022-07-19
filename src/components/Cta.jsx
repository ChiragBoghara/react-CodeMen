import React from "react";
import LoginButton from "./LoginButton";
import gitgub from "../images/github-icon.svg";

export default function Cta() {
  return (
    <section id="cta">
      <div className="cta-container">
        <h3>Ready to get covered?</h3>
        <p>Join over a million developers in shipping healthier code today. Sign up with your code host below.</p>
        <div className="row">
        <LoginButton img={gitgub} alt="Github"/>
        <LoginButton img="/images/gitlab-icon.svg" alt="Gitlab"/>
        <LoginButton img="/images/bitbucket-icon.svg" alt="BitBucket"/>
        </div>
      </div>
    </section>
  );
}
