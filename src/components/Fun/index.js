import React, { Component } from 'react';

import logo from '../../img/fun/logo.png';
import person_1 from '../../img/fun/person-1.png';
import dragonfly from '../../img/fun/dragonfly.gif';

import '../../stylesheets/fun/main.css';
import '../../stylesheets/fun/add.css';
import '../../stylesheets/fun/slick.css';
import '../../stylesheets/fun/normalize.css';

class Fun extends Component {

  render() {
    return (
    	<div>
        <div className="preloader" />
        <div id="main">
          <div className="sections">
            {/* Section 1 */}
            <div className="section section-top active prev">
              <div className="socket">
                <div className="logo">
                  <img src={logo} alt="Logo" />
                </div>
                <img className="person" src={person_1} alt="Moses"/>
                <img className="dragonfly" src={dragonfly} alt="Dragonfly" />
                <div className="text-block">
                  <div className="title">
                    Hi there, my name <br />is Moses Surumen!
                  </div>
                  <p>
                    I’m going on a spectacular <br />adventure 
                    filled with monsters <br />and 
                    crazy obstacles.
                  </p>
                  <p>
                    <span className="hide-mob"> 
                      Come join me!
                    </span>
                  </p>
                  <button data-to={2} className="btn-to btn-circle">
                    <span>LET’S GO</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Section 2 */}
            <div className="section section-2">
              <div className="socket">
                <div className="text-block">
                  <div className="title">First stop: <br /> Nairobi, Kenya</div>
                  <section>
                    <p>
                      My mentor, Lowden Clear, has sent me on a special mission: To collect as much treasure as possible. 
                    </p>
                    <p>
                      But … can I do that all on my own?
                    </p>
                  </section>
                  <button data-to={3} className="btn-to btn-circle">
                    <span>help me!</span>
                  </button>
                </div>
              </div>
            </div>
            </div>
      </div>
      </div>
    );
  }
}

export default Fun;