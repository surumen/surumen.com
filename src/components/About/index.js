import React, { Component } from 'react';

import menu_icon from '../../img/icon-menu.svg';
import about_icon from '../../img/icon-about.svg';
import github_icon from '../../img/icon-github.svg';
import dribble_icon from '../../img/icon-dribbble.svg';
import '../../stylesheets/style.css';

export default class About extends Component {

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
                <img src={about_icon} alt="About"/>
              </a>
            </div>
          </div>
          <div className="menu open">
            <a href="/" className="vh-100 vh-50-l flex items-center items-end-l justify-center">
              <img src={menu_icon} className="mb1" alt="" />
            </a>
          </div>
        </div>
        <div id="barba-wrapper">
          <div className="barba-container menu-active" data-namespace="about">
            <div className="ph4 ph5-l">
              <header className="min-vh-50-l lh-solid w-100 mt2 mb2 pt4
      flex flex-column items-baseline justify-between">
                <span className="f7 ttu tracked-mega mono silver mb5">
                  Oh, how wonderful, you're back
                </span>
                <h1 className="f2 f1-m f-5-l mt0 mw7 lh-title lh-solid-l" style={{marginTop: '.1rem'}}>
                  How's it going?
                </h1>
              </header>
            </div>
            <div className="pa4 pa5-l">
              <p className="mw6 f4 f3-ns lh-copy mb0">I'm a senior at the University of California, Berkeley studying Electrical Engineering and Computer Science.</p>
              <p className="lh-copy measure-narrow">Away from school, I founded <a href="http://msoma.org">M-Soma</a>, a computer science training program for high school grads from under-resourced schools and communities in Nairobi, Kenya</p>
              <p className="lh-copy measure-narrow">If you'd like to talk about computer science education, HCI, or your secret Harry Potter fantasies, get in touch! <a href="mailto:me@surumen.com">hello@surumen.com</a></p>
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