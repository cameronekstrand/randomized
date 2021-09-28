import React, { Component } from 'react';
import './styles-Scripts.css';
import { Button } from 'antd'; 
import { NavLink } from "react-router-dom";

import LetterA from './Letters/letterA.png'
import LetterB from './Letters/letterB.png'
import LetterC from './Letters/letterC.png'
import LetterD from './Letters/letterD.png'
import LetterE from './Letters/letterE.png'
import LetterF from './Letters/letterF.png'
import LetterG from './Letters/letterG.png'
import LetterH from './Letters/letterH.png'
import LetterI from './Letters/letterI.png'
import LetterJ from './Letters/letterJ.png'
import LetterK from './Letters/letterK.png'
import LetterL from './Letters/letterL.png'
import LetterM from './Letters/letterM.png'
import LetterN from './Letters/letterN.png'
import LetterO from './Letters/letterO.png'
import LetterP from './Letters/letterP.png'
import LetterQ from './Letters/letterQ.png'
import LetterR from './Letters/letterR.png'
import LetterS from './Letters/letterS.png'
import LetterT from './Letters/letterT.png'
import LetterU from './Letters/letterU.png'
import LetterV from './Letters/letterV.png'
import LetterW from './Letters/letterW.png'
import LetterX from './Letters/letterX.png'
import LetterY from './Letters/letterY.png'
import LetterZ from './Letters/letterZ.png'

// document.body.style.overflow = "hidden"

// window.onbeforeunload = function () {
//   window.scrollTo(220, 50);
// }

function refreshPage() {
  window.location.reload(false);
}

var images = [
    LetterA,
    LetterB,
    LetterC,
    LetterD,
    LetterE,
    LetterF,
    LetterG,
    LetterH,
    LetterI,
    LetterJ,
    LetterK,
    LetterL,
    LetterM,
    LetterN,
    LetterO,
    LetterP,
    LetterQ,
    LetterR,
    LetterS,
    LetterT,
    LetterU,
    LetterV,
    LetterW,
    LetterX,
    LetterY,
    LetterZ
];

var numbers = ["five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
var image_size = Math.floor(Math.random() * (300)) + 50;
var image = images[Math.floor(Math.random() * (25))];
var image_count = 0;

if (image_size > 250) {
  image_count = 250;
}
else if (image_size > 200) {
  image_count = 500;
}
else if (image_size > 150) {
  image_count = 1000;
}
else if (image_size > 10) {
  image_count = 1500;
}
else {
  image_count = 2000;
}

var animation = numbers[(Math.floor(Math.random() * (15)))];

export class Scripts extends React.Component {
    constructor(props) {
        super(props);
  
      this.state = {
      };
    }

    render() {
      return (
          <div className="body">
            <div className={"image-grid " + animation} >
                {[...Array(image_count)].map((x, i) =>
                <img className="randomized-image" key={i} style={{width: image_size+"px"}} src={image} alt=""/>)}
            </div>
            <div>
            <NavLink to="/randomized"><Button className="backhome-button">Home</Button></NavLink>
            <NavLink to="/scripts"><Button className="refresh-button">Home</Button></NavLink>
            </div>
          </div>
      );
    }
  }