import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Slider from "../../components/Slider/Slider";
import data from "./data/data";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-header">
        <div>
          <img className="landing-logo" src="/img/logo.svg" alt=""></img>
        </div>
        <div className="landing-search-bar">
          <input className="landing-search-input" placeholder="Search"></input>
          <i className="landing-search-icon">
            <BiSearch />
          </i>
        </div>
      </div>

      <div className="landing-main">
        <div className="landing-left">
          <div></div>
          <div>
            <h1 className="landing-title">Gotta catch 'em all!</h1>
            <p style={{ margin: "15px 0" }}>Lorem ipsum dolor.</p>
            <Link className="landing-link" to="/">
              <div className="landing-btn">DISCOVER</div>
            </Link>
          </div>
          <div className="landing-featured">
            <Slider data={data}></Slider>
          </div>
        </div>

        <div className="landing-right">
          <div>
            <img
              className="landing-img"
              src="/img/charizard.png"
              alt="landing_picture"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
