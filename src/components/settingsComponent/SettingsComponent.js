import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Form, Dropdown, Modal, Button } from "react-bootstrap";
import "./settingsComponent.css";
import siteJPEG from "../../images/mapa-2.jpeg"; 

export function SettingsComponent() { 
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <div className="container">
      <h2 className="m-4">Settings</h2>

      <div className="p-3 border border-2 rounded m-4">
        <h4 scope="col">Site</h4>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Add Plano
          </label>
          <input
            placeholder="Enter plano..."
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Search file</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary" type="button">
            Add
          </button>
        </div>
      </div>

      <div className="p-3 border border-2 rounded m-4">
        <div className="d-grid gap-2 d-md-flex mb-4 justify-content-start">
          <h4>Tag</h4>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
              Action
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Add</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Delet</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Add Id Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Employee
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary" type="button">
            Add
          </button>
        </div>
      </div>

      <div className="p-3 border border-2 rounded m-4">
        <h4>Zone</h4>
        <div className="input-group mb-3">
          <select className="form-select mt-3" id="inputGroupSelect01">
            <option selected>Select zone...</option>
            <option value="1">Forbidden</option>
            <option value="2">Detection</option>
            <option value="3">Others</option>
          </select>
        </div>
        <div className="mb-3">
          

          <label for="exampleInputEmail1" className="form-label">
            Start date
          </label>
            <DatePicker
            className="form-control"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Ending date
          </label>
          <DatePicker
            className="form-control"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
          />
        </div>
        <div className="mb-3">
          <Button variant="primary" onClick={handleShow}>
          Coordinate detention
          </Button>

          <Modal show={show} onHide={handleClose} animation={false} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Plano</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={siteJPEG} className="img-fluid" alt="mapa"></img>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary" type="button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
