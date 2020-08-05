import React from "react";
import { Link } from 'react-router-dom'

import LogoImg from "../../Assets/images/logo.svg";
import landingImg from "../../Assets/images/landing.svg";
import studyIcon from "../../Assets/images/icons/study.svg";
import giveClassesIcon from "../../Assets/images/icons/give-classes.svg";
import PurpleHeartIcon from "../../Assets/images/icons/purple-heart.svg";

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img
          src={LogoImg}
          alt="Proffy" />

          <h2>Sua plataforma de estudos online</h2>
          </div>

          <img
          src={landingImg}
          alt="Plataforma de estudos"
          className='hero-image'/>

          <div className="buttons-container">
              <Link to="/study" className="study">
                  <img src={studyIcon} alt="Estudar"/>
                  Estudar
              </Link>

              <Link to="/give-classes" className="give-classes">
                  <img src={giveClassesIcon} alt="Dar Aulas"/>
                  Dar Aulas
              </Link>
              <span className="total-connections">
                   Total de 320 conexões já realizadas <img src={PurpleHeartIcon} alt="Coração Roxo "/>
              </span>
          </div>
      </div>
    </div>
  );
}
export default Landing;
