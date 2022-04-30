import React from "react";
import { Link, animateScroll as scroll } from "react-scroll/modules";

function Home() {
  return (
    <><Link activeClass="active" to="download.jsx" spy={true} smooth={true} offset={-70} duration={500}></Link><div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt="" />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              This is the game.
            </p>
          </div>
        </div>
      </div>
    </div></>
);
}

export default Home;
