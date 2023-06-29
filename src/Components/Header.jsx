import React from "react";
import { BsGithub, BsTwitter, BsRecordCircleFill } from "react-icons/bs";


function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary pad py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={32}
              classname="d-block my-1"
              viewBox="0 0 118 94"
              role="img"
            >
              <path
                fillrule="evenodd"
                cliprule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                fill="currentColor"
              />
            </svg>
          </a>
          <button
            className="navbar-toggler navbar-toggler-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Docs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Examples
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Themes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blog
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <BsGithub />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <BsTwitter />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  me-3 " href="/">
                  <BsRecordCircleFill />
                </a>
              </li>
              <li className="nav-item">
                <div className="btn-group">
                  <a
                    className=" mt-2 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="/"
                  >
                    v5.3
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="/">
                        Menu item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Menu item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Menu item
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
