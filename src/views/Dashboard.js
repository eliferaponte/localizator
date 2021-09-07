import React from "react";
import { Card } from "../components/card/Card";
import { SiteMap } from "../components/siteMap/SiteMap";

export function Dashboard() {
  return (
    <div className="container">
      <div className="d-flex align-items-center">
        <h2 className="m-4">Zone</h2>
      </div>
      <Card />
      <SiteMap />
    </div>
  );
}

export default Dashboard;
