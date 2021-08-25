import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import { Report } from "./views/Report";
import { Login } from "./components/login/Login";
import { Sidebar } from "./components/sidebar/Sidebar";
import { SettingsComponent } from "./components/settingsComponent/SettingsComponent";
import { Notification } from "./components/notification/Notification";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/public/login">
          <Login />
        </Route>
        <Route path="/private/">
          <Sidebar />

          <Switch>
            <Route path="/private/dashboard">
              <Dashboard />
            </Route>
            <Route path="/private/settings">
              <SettingsComponent />
            </Route>
            <Route path="/private/reports">
              <Report />
            </Route>
            <Route path="/private/notifications">
              <Notification />
            </Route>
          </Switch>
        </Route>
        <Route path="*">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
