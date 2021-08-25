import React from "react";
import "./notification.css";
import siteJPEG from "../../images/enconstruccion.png";

export function Notification() {
  return (
    <div className="p-3 d-flex justify-content-center m-4">
      <img src={siteJPEG} className="img-fluid" alt="mapa"></img>
    </div>
  );
}
