import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "./sidebar.css";
import logoPNG from "../../images/logo.png";

export function Sidebar() {
  return (
    <div className="d-flex ">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logoPNG}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/private/dashboard"
                className="list-group-item list-group-item-action bg-transparent second-text "
              >
                Dashboard
              </Link>
              <Link
                to="/private/reports"
                className=" list-group-item list-group-item-action bg-transparent second-text fw-bold-"
              >
                Reports
              </Link>
              <Link
                to="/private/settings"
                className="list-group-item list-group-item-action bg-transparent second-text fw-bold-"
              >
                Settings
              </Link>
              <Link
                to="/private/notifications"
                className=" list-group-item list-group-item-action bg-transparent second-text fw-bold-"
              >
                Notifications
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavDropdown
        title="Luciano Gomez"
        id="basic-nav-dropdown"
        className="dropDown  bg-dark"
      >
        <Link
          to="/login"
          className=" list-group-item list-group-item-action bg-transparent second-text fw-bold-"
        >
          <NavDropdown.Item href="#action/3.1">Log out</NavDropdown.Item>
        </Link>
      </NavDropdown>
    </div>
  );
}
