import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

const Header = () => {
  return (
    <div>
      <div id="header">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">

                <div id="header-statement" className="text-left">
                  <h2>start sharing</h2>
                  <h3> No matter your problem, all are anonymous</h3>
                </div>
                
                <div id="header-btn">
                  <a className="btn btn-outline-secondary" href="#">
                    Click Here
                  </a>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
