import React from "react";
function Download() {
  
  return (
    <div className="download">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Download</h1>
            <p>
              Requirements to download the game.
              
            </p>
            <p><a href="https://onedrive.live.com/download?cid=D8CCFBE118E7FB56&resid=D8CCFBE118E7FB56%21106&authkey=AFUnJmDb-Jkq5k8" className="btn btn-dark btn-lg" role="button" aria-pressed="true"  download>Game</a></p>
            <p><a href="https://github.com/ijCasimbon/capstone-site/raw/main/src/components/tired.jpg/" className="btn btn-dark btn-lg" role="button" aria-pressed="true" download>tired</a></p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
