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
              Put download link <a href="/game/My_First_Cpp_Game.exe" download>
              here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
