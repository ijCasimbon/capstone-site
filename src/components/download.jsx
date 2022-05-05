import React from "react";
import { Link, animateScroll as scroll } from "react-scroll/modules";
function Download() {
  
  return (
    <div className="download">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Download</h1>
            <p>
              Requirements to download the game.
              
            </p>
            <p><a href="https://onedrive.live.com/download?cid=D8CCFBE118E7FB56&resid=D8CCFBE118E7FB56%21106&authkey=AFUnJmDb-Jkq5k8" className="btn btn-dark btn-lg" role="button" aria-pressed="true" id="button" download>Game</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;