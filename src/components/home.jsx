import React from "react";
//src="https://github.com/ijCasimbon/capstone-site/raw/main/src/components/download-logo.jpg/"
//class="img-fluid rounded mb-4 mb-lg-0"
function Home() {
  return (
    <div className="home">
    <div class="container">
      <div class="row align-items-center my-5">
        <div class="col-lg-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            className="player1"
            src="https://github.com/ijCasimbon/capstone-site/raw/main/src/components/images/player.png"
            alt="Player"
          />
        </div>
        <div class="col-lg-5">
          <h2 class="font-weight-light">Home</h2>
          <p>
            Welcome to Cubed World!
          </p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Home;
