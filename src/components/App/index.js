import React, { Component } from 'react';

import menu_icon from '../../img/icon-menu.svg';
import about_icon from '../../img/icon-about.svg';
import github_icon from '../../img/icon-github.svg';
import dribble_icon from '../../img/icon-dribbble.svg';
import '../../stylesheets/style.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className="header menu-active bg-white
    h3 vh-100-l
    br-l b--light-gray
    fixed-l top-0 left-0 z-max
    flex justify-between flex-row-reverse flex-row-l items-center items-start-l">
          <div className="ph4 pv0-l w-100 w-auto-l flex flex-column-l justify-between items-center">
            <div className="vh-50-l flex items-end">
              <a href="/" className="no-underline">
                <h1 className="f4 f3-l ma0">Moses</h1>
              </a>
            </div>
            <div className="fixed-l bottom-0 left-0 inline-flex justify-center items-center ma4-l">
              <a href="/about" className="o-50 glow">
                <img src={about_icon} alt="About" />
              </a>
            </div>
          </div>
          <div className="menu open">
            <a href="/" className="vh-100 vh-50-l flex items-center items-end-l justify-center">
              <img src={menu_icon} className="mb1" alt=""/>
            </a>
          </div>
        </div>
        <div id="barba-wrapper">
          <div className="barba-container mt3" data-namespace="home">
            <div className="toc">
              <a className="pv3 ph4 ph5-l flex items-baseline no-underline" href="/blog/facial_recognition">
                <span className="f7 mr4 mono tracked silver language">Python</span> 
                <span className="title dib b">Facial Recognition using Support Vector Machines and eigenfaces</span>
              </a>
              <a className="pv3 ph4 ph5-l flex items-baseline no-underline" href>
                <span className="f7 mr4 mono tracked silver language">JavaScript</span> 
                <span className="title dib b">Google Chrome weather extension</span>
              </a>
              <a className="pv3 ph4 ph5-l flex items-baseline no-underline" href>
                <span className="f7 mr4 mono tracked silver language">JavaScript</span> 
                <span className="title dib b">Maze Creator</span>
              </a>
              <a className="pv3 ph4 ph5-l flex items-baseline no-underline" href>
                <span className="f7 mr4 mono tracked silver language">Java</span> 
                <span className="title dib b">BearMaps (navigation around the Berkeley campus)</span>
              </a>
              <a className="pv3 ph4 ph5-l flex items-baseline no-underline" href>
                <span className="f7 mr4 mono tracked silver language">JavaScript</span> 
                <span className="title dib b">Free WiFi Locator</span>
              </a>
              <a className="pv3 ph4 ph5-l flex items-baseline no-underline" href>
                <span className="f7 mr4 mono tracked silver language">Ruby</span> 
                <span className="title dib b">Campus Textbook exchange</span>
              </a>
              <a className="pv3 ph4 ph5-l flex items-baseline no-underline" href>
                <span className="f7 mr4 mono tracked silver language">Assembly</span> 
                <span className="title dib b">Pyramid to Moses (Operating System)</span>
              </a>
              <a className="pv3 ph4 ph5-l flex items-baseline no-underline" href>
                <span className="f7 mr4 mono tracked silver language">JavaScript</span> 
                <span className="title dib b">RSA Encrypt</span>
              </a>
              <a className="pv3 ph4 ph5-l flex items-baseline no-underline" href>
                <span className="f7 mr4 mono tracked silver language">Java</span> 
                <span className="title dib b">Daily Sudoku Challenge</span>
              </a>
              <a className="pv3 ph4 ph5-l flex items-baseline no-underline" href>
                <span className="f7 mr4 mono tracked silver language">JavaScript</span> 
                <span className="title dib b">High School website</span>
              </a>
              <a className="pv3 ph4 ph5-l flex items-baseline no-underline" href>
                <span className="f7 mr4 mono tracked silver language">JavaScript</span> 
                <span className="title dib b">HackNairobi</span>
              </a>
            </div>
            <div className="mh4 mh5-l pv3 pv4-l gray f7 flex-ns justify-between items-center">
              <div className="mv3 mv0-ns inline-flex items-center">
                <a href="https://github.com/surumen" className="o-50 glow no-underline mr3">
                  <img src={github_icon} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/mosessurumen/" className="o-50 glow no-underline mr3">
                  <img src={dribble_icon} alt="Linkedin" />
                </a>
              </div>
              <div className>
                © 2017 Moses Surumen
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;