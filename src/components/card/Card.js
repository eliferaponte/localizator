import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

export function Card() {
  return (
    <div className="container-fluid px-4">
      <div className="row g-3 my-2">
        <div className="col-md-3">
          <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
            <div>
              <h3 className="fs-2">8/12</h3>
              <p className="fs-5">Active Functional</p>
            </div>
            <i>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </i>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
            <div>
              <h3 className="fs-2">9/10</h3>
              <p className="fs-5">Active tags</p>
            </div>
            <i>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </i>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
            <div>
              <h3 className="fs-2">3/7</h3>
              <p className="fs-5">Reports</p>
            </div>
            <i>
              <FontAwesomeIcon icon={faFile} size="lg" />
            </i>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
            <div>
              <h3 className="fs-2">3</h3>
              <p className="fs-5">Notifications</p>
            </div>
            <i>
              <FontAwesomeIcon icon={faBell} size="lg" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
