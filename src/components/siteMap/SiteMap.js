import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./siteMap.css";
import siteJPEG from "../../images/mapa-2.jpeg";

export function SiteMap() {
  return (
    <div className="p-3 border border-2 rounded m-4">
      <h2>Central plant</h2>

      <div className="input-group btn-search rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search plant..."
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text border-0 " id="search-addon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>

      <img src={siteJPEG} className="img-fluid" alt="mapa"></img>
      <div className="m-2 d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary" type="button">
          -
        </button>
        <button className="btn btn-primary" type="button">
          +
        </button>
      </div>
    </div>
  );
}
