import React from "react";
import "./reportsTable.css";

export function ReportsTable() {
  return (
    <div className="container ">
      <div className="p-3 border border-2 rounded m-4">
        <h4>Reports</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Site</th>
              <th scope="col">Contact type</th>
              <th scope="col">Distance</th>
              <th scope="col">Duration</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>main entrance</td>
              <td>closeness</td>
              <td>0.5</td>
              <td>120</td>
              <td>12/06/2021</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Terrace</td>
              <td>closeness</td>
              <td>0.1</td>
              <td>60</td>
              <td>14/07/2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
