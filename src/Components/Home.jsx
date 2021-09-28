import React, { Component } from 'react'
import { Button } from 'antd'; 
import './styles-Home.css';
import { BrowserRouter, Link, BrowserRouter as Switch, Route } from 'react-router-dom';
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
//     window.scrollTo(0, 0);
// }

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

var background_color = "#" + (String(Math.floor(Math.random() * (9))) + String(Math.floor(Math.random() * (9))) + String(Math.floor(Math.random() * (9))) + String(Math.floor(Math.random() * (9))) + String(Math.floor(Math.random() * (9))) + String(Math.floor(Math.random() * (9))));
export class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="image-grid-home">
                    {[...Array(400)].map((x, i) =>
                    <img className="randomized-image" key={i} style={{width: '100px'}} src={images[Math.floor(Math.random() * (25))]} alt=""/>)}
                </div>
                <div className="home-content">
                    <p className="home-randomized">Randomized</p>
                    <p className="home-by">by</p>
                    <p className="home-name">Cameron Ekstrand</p>
                    <NavLink to={process.env.PUBLIC_URL + '/scripts'}><Button className="enter-button" style={{backgroundColor: background_color}}>Start</Button></NavLink>
                </div>
                <div className="grey"></div>
            </div>
        )
    }
}
