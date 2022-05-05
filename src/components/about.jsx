import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <h1>How to play the game.</h1>

            <dl class="row">
            <dt class="col-sm-2"><h3><b>↔</b></h3></dt>
            <dd class="col-sm-10">Movement</dd>

            <dt class="col-sm-2"><b>[SPACE BAR]</b></dt>
            <dd class="col-sm-10">Jump</dd>
            </dl>

            <h2>Objectives</h2>
            <p>Players must collect all 3 coins while avoiding all blue obstacles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
