import React from "react";
import Icons from "../images/bootstrap-icons.png"
import { FiArrowRight } from "react-icons/fi";

function BootIcons() {
  return (
    <div className="bootIcons">
      <section className="row g-3 g-md-5 pb-md-5 mb-5 align-items-center pad">
        <div className="col-lg-6">
          <div
            className="masthead-followup-icon d-inline-block mb-3 p-3 rounded-3"
            style={{ backgroundColor: "#dbf0e6" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="currentColor"
              focusable="false"
              viewBox="0 0 16 16"
              style={{ color: "#198754" }}
            >
              <path d="M0 6a6 6 0 1112 0A6 6 0 010 6z" />
              <path d="M12.93 5h1.57a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1.57a6.953 6.953 0 01-1-.22v1.79A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4h-1.79c.097.324.17.658.22 1z" />
            </svg>
          </div>
          <h2 className="display-5 mb-3 fw-semibold lh-sm">
            Personalize it with Bootstrap&nbsp;Icons
          </h2>
          <p className="lead fw-normal">
            <a href="/">Bootstrap Icons</a> is an
            open source SVG icon library featuring over 1,800 glyphs, with more
            added every release. They're designed to work in any project,
            whether you use Bootstrap itself or not. Use them as SVGs or icon
            fonts—both options give you vector scaling and easy customization
            via CSS.
          </p>
          <p className="d-flex justify-content-start lead fw-normal mb-md-0">
            <a
              href="/"
              className="icon-link icon-link-hover fw-semibold"
            >
              Get Bootstrap Icons
              <FiArrowRight className="mt-1" />
            </a>
          </p>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid mt-3 mx-auto"
            src={Icons}
            alt="Bootstrap Icons"
            width={700}
            height={425}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}

export default BootIcons;
