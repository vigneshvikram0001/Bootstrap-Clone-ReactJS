import React from "react";
import { BsBraces } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

function BootBuild() {
  return (
    <div className="bootBuild">
      <section className="row g-md-5 pb-md-5 mb-5 align-items-center pad">
        <div className="col-lg-8 mb-5">
          <div
            className="masthead-followup-icon d-inline-block mb-3 text-danger rounded-4 p-3"
            style={{ backgroundColor: "#ffcbdc" }}
          >
            <BsBraces className="braces" />
          </div>
          <h2 className="display-5 mb-3 fw-semibold lh-sm">
            Build and extend in real-time with CSS&nbsp;variables
          </h2>
          <p className="lead fw-normal">
            Bootstrap 5 is evolving with each release to better utilize CSS
            variables for global theme styles, individual components, and even
            utilities. We provide dozens of variables for colors, font styles,
            and more at a <code>:root</code> level for use anywhere. On
            components and utilities, CSS variables are scoped to the relevant
            class and can easily be modified.
          </p>
          <p className="d-flex align-items-start flex-column lead fw-normal mb-0">
            <a
              href="/docs/5.3/customize/css-variables/"
              className="icon-link icon-link-hover fw-semibold mb-3"
            >
              Learn more about CSS variables
              <FiArrowRight className="mt-1" />
            </a>
          </p>
        </div>
        <div className="row gx-md-5">
          <div className="col-lg-6 mb-3">
            <h3 className="fw-semibold">Using CSS variables</h3>
            <p>
              Use any of our{" "}
              <a href="/docs/5.3/customize/css-variables/#root-variables">
                global <code>:root</code>
                variables
              </a>{" "}
              to write new styles. CSS variables use the{" "}
              <code>var(--bs-variableName)</code> syntax and can be inherited by
              children elements.
            </p>
            <div className="highlight">
              <pre
                tabIndex={0}
                className="chroma border border-1 p-3 rounded rounded-3"
              >
                <code className="language-scss" data-lang="scss">
                  <span className="line">
                    {`.component {
  color: var(--bs-gray-800);
  background-color: var(--bs-gray-100);
  border: 1px solid var(--bs-gray-200);
  border-radius: .25rem;
}

.component-header {
  color: var(--bs-purple);
}`}
                  </span>
                </code>
              </pre>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <h3 className="fw-semibold">Customizing via CSS variables</h3>
            <p>
              Override global, component, or utility class variables to
              customize Bootstrap just how you like. No need to redeclare each
              rule, just a new variable value.
            </p>
            <div className="highlight">
              <pre
                tabIndex={0}
                className="chroma border border-1 p-3 rounded rounded-3"
              >
                <code className="language-scss" data-lang="scss">
                  <span className="line">
                    {`body {
  --bs-body-font-family: var(--bs-font-monospace);
  --bs-body-line-height: 1.4;
  --bs-body-bg: var(--bs-gray-100);
}

.table {
  --bs-table-color: var(--bs-gray-600);
  --bs-table-bg: var(--bs-gray-100);
  --bs-table-border-color: transparent;
}`}
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BootBuild;
