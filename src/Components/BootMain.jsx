import React from "react";
import { BsBookHalf } from "react-icons/bs";

function BootMain() {
  return (
    <div className="bootMain">
      <section className="bd-masthead mb-5" id="content">
        <div className="container-xxl bd-gutter">
          <div className="col-md-8 mx-auto text-center">
            <a
              className="d-flex flex-column flex-lg-row justify-content-center align-items-center mb-4 text-dark lh-sm text-decoration-none"
              href="/"
            >
              <strong
                className="d-sm-inline-block p-2 me-2 mb-2 mb-lg-0 rounded-3 masthead-notice"
                style={{ backgroundColor: "#ffe484" }}
              >
                New in v5.3
              </strong>
              <span className="text-body-secondary">
                Color mode support, expanded color palette, and more!
              </span>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={200}
              height={165}
              className="d-none d-sm-block mx-auto mb-3 boot-logo"
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
            <h1 className="mb-3 fw-semibold lh-1 boot-main-h1">
              Build fast, responsive sites with&nbsp;Bootstrap
            </h1>
            <p className="lead mb-4 boot-main-p">
              Powerful, extensible, and feature-packed frontend toolkit. Build
              and customize with Sass, utilize prebuilt grid system and
              components, and bring projects to life with powerful JavaScript
              plugins.
            </p>
            <div className="d-flex flex-column flex-lg-row align-items-md-stretch justify-content-md-center gap-3 mb-4 boot-main-buttons">
              <div className="d-inline-block v-align-middle fs-5 p-3 b1 border border-1 rounded-2">
                <div className="highlight">
                  <pre tabIndex={0} className="chroma">
                    <code className="language-sh" data-lang="sh">
                      <span className="line">
                        <span className="cl">npm i bootstrap@5.3.0</span>
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
              <a
                href="/"
                className="btn btn-lg bd-btn-lg btn-bd-primary b2 d-flex align-items-center justify-content-center fw-semibold pointer purple-bg  border border-1 rounded-2"
                onclick="ga('send', 'event', 'Jumbotron actions', 'Get started', 'Get started');"
              >
                <BsBookHalf className="me-2 mt-1" />
                Read the docs
              </a>
            </div>
            <p className="text-body-secondary mb-0">
              Currently <strong>v5.3.0</strong>
              <span className="px-1">·</span>
              <a href="/" className="link-secondary">
                Download
              </a>
              <span className="px-1">·</span>
              <a href="/" className="link-secondary text-nowrap">
                v4.6.x docs
              </a>
              <span className="px-1">·</span>
              <a href="/" className="link-secondary text-nowrap">
                All releases
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BootMain;
