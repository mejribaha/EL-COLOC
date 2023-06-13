import React from "react";
import "./Landing.css";
import myLogo from "../../images/logo.png";
import myLogo1 from "../../images/logo-1.png";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import tunis from "../../images/tunis.jpg";
import bizerte from "../../images/bizerte.jpg";
import jendouba from "../../images/jendouba.jpg";
import kef from "../../images/kef.jpg";
import mahdia from "../../images/mahdia.jpg";
import nabeul from "../../images/nabeul.jpg";
import beja from "../../images/beja.jpg";
import sousse from "../../images/sousse.jpg";
function Landing() {
  return (
    <div className="landing">
      {/* navbar part */}
      <nav className="my-nav">
        <img src={myLogo} alt="logo" className="mylogo" />
        <div className="buttonpart">
          <h5>
            {" "}
            <Link to="/login"> Sign In</Link>
          </h5>
          <h5>
            <Link to="/register">Sign Up</Link>
          </h5>
          <h5 className="download">Download App</h5>
        </div>
      </nav>
      {/* first content part */}
      <div className="banner">
        <div>
          <h6>You just Graduated and looking forward to the university?</h6>
          <h6>Looking for a house to rent ?</h6>
          <h1>
            Find <span>really suitable</span>{" "}
          </h1>
          <h1>Houses for students</h1>
        </div>
        <div>
          <img src={myLogo1} alt="" />
        </div>
      </div>
      <div className="cities">
        <h1>
          View rooms in <span>Popular Cities</span>
        </h1>
        <div className="my-cities">
          <div className="city-card">
            <h3>Tunis</h3>
            <img src={tunis} />
          </div>
          <div className="city-card">
            <h3>Béja</h3>
            <img src={beja} />
          </div>{" "}
          <div className="city-card">
            <h3>Sousse</h3>
            <img src={sousse} />
          </div>{" "}
          <div className="city-card">
            <h3>Mahdia</h3>
            <img src={mahdia} />
          </div>
          <div className="city-card">
            <h3>Nabeul</h3>
            <img src={nabeul} />
          </div>
          <div className="city-card">
            <h3>Jendouba</h3>
            <img src={jendouba} />
          </div>{" "}
          <div className="city-card">
            <h3>Kef</h3>
            <img src={kef} />
          </div>{" "}
          <div className="city-card">
            <h3>Bizerte</h3>
            <img src={bizerte} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Landing;
