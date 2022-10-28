import React from 'react'
import "../style/grid.css";

import instIco from "../images/icon/inst.jpg"
import shafaIco from "../images/icon/shafa.png"

const Header = () => {
  return (
    <header>
      <div className="wrap-header">
        <div id="top">
          <div className="grid">
            <div className="row">
              <div className="col-1-3">
                <span>Beauty Vay</span>
              </div>
              <div className="col-2-3">
                <ul className="list-inline top-link link">
                  <li>
                    <a href="https://www.instagram.com/beauty_vay/">
                      Instagram
                    </a>
                  </li>

                  <li>
                    <a href="https://shafa.ua/member/mika6kahelen">Shafa</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main-header">
          <div className="grid">
            <div className="row">
              <div className="hero-heading">
                <sup>cosmetic</sup>
                <span>Beauty Vay</span>
                <div className="tl"></div>
                <div className="tr"></div>
                <div className="br"></div>
                <div className="bl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header