import React from "react";
import Heading from "./Heading";
import NavigationBar from "./NavigationBar";
import SubHeading from "./SubHeading";
import Card from "./Card";

export default function Resources() {
  return (
    <section id="resources">
      <Heading text="Resources"></Heading>
      <SubHeading text="Want to learn more about code coverage? View our library of resources to start building a culture of coverage at your company."></SubHeading>
      <NavigationBar text="View Resources" style={{fontSize:"1.1rem"}}></NavigationBar>
      <div className="card-deck row">
        <Card imgSrc="/images/cover.webp" title="PAGE" content="What should my code coverage goal be?" navigationText="Learn More"></Card>
        <Card imgSrc="/images/2020-state-of-open-source-code-coverage.webp" title="INFOGRAPHIC" content="2022 State of Open Source Code Coverage" navigationText="View Inforgraphic"></Card>
        <Card imgSrc="/images/8-factors-Influencing.webp" title="BLOG POST" content="8 Factors Influencing Your Approach to Code Coverage" navigationText="Read Blog Post"></Card>
      </div>
    </section>
  );
}
