import React from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

export function Login() {
  const history = useHistory();
  const handleOnLogin = () => history.push("/private/dashboard");
  return (
    <div className="container w-75 mt-5 rounded shadow">
      <div className="row align-items-stretch">
        <div className="col bg-login d-none d-lg-block col-md-5 col-lg-5 col-xl-6"></div>

        <div className="col bg-white p-5">
          <form action="#">
            <h2 className="fw-bold text-center mt-4">Welcome</h2>
            <div className="mb-4">
              <label for="exampleInputEmail1" className="form-label">
                Email/User
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-4">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleOnLogin}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
