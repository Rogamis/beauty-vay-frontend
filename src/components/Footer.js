import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <div id="map" style={{ height: "10px" }}></div>
      </div>
      <div className="grid wrap-footer">
        <div className="row">
          <div className="col-1-4 col-footer-2">
            <div className="wrap-col">
              <h3 className="widget-title">Contact Us</h3>
              <p>Call us:</p>
              <strong style={{ fontSize: "25px" }}>+380683624369</strong>
              <p>Email:</p>
              <strong>beautyvay22@gmail.com</strong>
            </div>
          </div>
          <div className="col-1-4 col-footer-3">
            <div className="wrap-col">
              <h3 className="widget-title">Socials</h3>
              <ul className="social-buttons">
                <a href="https://www.instagram.com/beauty_vay/?igshid=NzNkNDdiOGI%3D">instagram</a>
              </ul>
              <a href="https://www.instagram.com/beauty_vay/?igshid=NzNkNDdiOGI%3D">Shafa</a>
            </div>
          </div>
        </div>
         <div id="map" style={{ height: "50px" }}></div>
      </div>
    </footer>
  );
}

export default Footer