import React from "react";
import Theme from "../images/bootstrap-themes.png"
import { FiArrowRight } from "react-icons/fi";


function BootTheme() {
  return (
    <div className="bootTheme">
      <section class="row g-3 g-md-5 pb-md-5 mb-5 align-items-center pad">
        <div class="col-lg-6">
          <div
            className="masthead-followup-icon d-inline-block mb-3 p-3 rounded-3"
            style={{ backgroundColor: "#ded2f6" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="currentColor"
              focusable="false"
              viewBox="0 0 16 16"
              style={{ color: "#6f42c1" }}
            >
              <path
                fillrule="evenodd"
                d="M8 16a6 6 0 006-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 006 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"
                cliprule="evenodd"
              />
            </svg>
          </div>

          <div>
            <h2 className="display-5 mb-3 fw-semibold lh-sm">
              Make it yours with official Bootstrap Themes
            </h2>
            <p className="lead fw-normal">
              Take Bootstrap to the next level with premium themes from the{" "}
              <a href="/">official Bootstrap Themes marketplace</a>. Themes are
              built on Bootstrap as their own extended frameworks, rich with new
              components and plugins, documentation, and powerful build tools.
            </p>
          </div>

          <p className="d-flex justify-content-start lead fw-normal mb-md-0">
            <a
              href="/"
              className="icon-link icon-link-hover fw-semibold text-center"
            >
              Browse Bootstrap Themes
              <FiArrowRight className="mt-1" />
            </a>
          </p>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid mt-3 mx-auto"
            src={Theme}
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}

export default BootTheme;
