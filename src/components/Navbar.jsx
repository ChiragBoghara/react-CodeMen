import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <img
          className="logo-img"
          src="/images/logo1.png"
          alt="CodeMen Logo"
        ></img>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <h1>☰</h1>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          className="navbar-nav ml-auto"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          <li className="nav-item">
            <a className="nav-link" href="#cycle">
              Cycles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resources">
              Resources
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cta">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
