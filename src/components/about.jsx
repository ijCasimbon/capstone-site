import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <h1>How to play the game.</h1>

            <dl class="row">
            <dt class="col-sm-2"><h3><b>↑↓→←</b></h3></dt>
            <dd class="col-sm-10">Movement</dd>

            <dt class="col-sm-2"><b>[SPACE BAR]</b></dt>
            <dd class="col-sm-10">Jump</dd>

            <dt class="col-sm-2"><b>[ESC]</b></dt>
            <dd class="col-sm-10">Pause the game</dd>
            
            <dt class="col-sm-2"><b>[ENTER]</b></dt>
            <dd class="col-sm-10">Selecting options</dd>


            </dl>

            <h2> <span className="win">How to win</span></h2>
            <figure class="col-lg-12">
            <img src="https://github.com/ijCasimbon/capstone-site/blob/main/src/components/images/coin.png?raw=true" class="figure-img img-fluid rounded" className="coin" alt="coin" ></img>
            <figcaption>Players must collect all 3 coins.</figcaption>
          </figure>

          <figure class="col-lg-12">
            <img src="https://github.com/ijCasimbon/capstone-site/blob/main/src/components/images/enemies.png?raw=true" class="figure-img img-fluid rounded" className="enemies" alt="enemies" ></img>
            <figcaption>Avoid all the enemies. If players touch them, they will lose 1 life and return back to the starting point. Player will lose if all 3 lives are used.</figcaption>
          </figure>
            
            <figure class="col-lg-12">
            <img src="https://github.com/ijCasimbon/capstone-site/blob/main/src/components/images/flag.png?raw=true" class="figure-img img-fluid rounded" className="flag" alt="flag" ></img>
            <figcaption>Once all coins are collected, go to the yellow flag to proceed to the next level.</figcaption>
          </figure>

          <figure class="col-lg-12">
            <img src="https://github.com/ijCasimbon/capstone-site/blob/main/src/components/images/heart.png?raw=true" class="figure-img img-fluid rounded" className="heart" alt="heart" ></img>
            <figcaption>Collect heart to regain 1 life that was lost.</figcaption>
          </figure>

          <figure class="col-lg-12">
            <img src="https://github.com/ijCasimbon/capstone-site/blob/main/src/components/images/final.png?raw=true" class="figure-img img-fluid rounded" className="final" alt="final" ></img>
            <figcaption>Finish all levels to complete the game.</figcaption>
          </figure>


          <h3><span className="powerup">Power-ups</span></h3>
          <figure class="col-sm-12">
            <img src="https://github.com/ijCasimbon/capstone-site/blob/main/src/components/images/shrink.png?raw=true" class="figure-img img-fluid rounded" alt="Shrink power-up image" ></img>
            <figcaption>Shrinks the players.</figcaption>
          </figure>
          
          <figure class="col-sm-12">
            <img src="https://github.com/ijCasimbon/capstone-site/blob/main/src/components/images/phase.png?raw=true" class="figure-img img-fluid rounded" alt="Phase power-up image" ></img>
            <figcaption>Alters the color of specific walls & platforms to light blue. Allows the player to go through these selected areas.</figcaption>
          </figure>

          <figure class="col-sm-12">
            <img src="https://github.com/ijCasimbon/capstone-site/blob/main/src/components/images/Immunity.png?raw=true" class="figure-img img-fluid rounded" alt="Immunity power-up image " ></img>
            <figcaption>Alters which enemies the player is currently immune to.Those that the player can bypass are gray. 
</figcaption>
          </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
