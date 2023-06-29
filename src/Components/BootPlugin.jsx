import React from "react";
import { FiArrowRight, FiLink2 } from "react-icons/fi";

function BootPlugin() {
  return (
    <div className="bootPlugin pad">
      <section className="pb-md-5 mb-5">
        <div className="col-lg-8 mb-5">
          <div
            className="masthead-followup-icon d-inline-block mb-3 me-2 p-3 px-4 rounded-3"
            style={{ backgroundColor: "#f3dfb3" }}
          >
            <FiLink2 className="fs-3" style={{ color: "#ffb000" }} />
          </div>
          <h2 className="display-5 mb-3 fw-semibold lh-sm">
            Powerful JavaScript plugins without&nbsp;jQuery
          </h2>
          <p className="lead fw-normal">
            Add toggleable hidden elements, modals and offcanvas menus, popovers
            and tooltips, and so much more—all without jQuery. Bootstrap's
            JavaScript is HTML-first, meaning most plugins are added with{" "}
            <code>data</code>
            attributes in your HTML. Need more control? Include individual
            plugins programmatically.
          </p>
          <p className="d-flex justify-content-start lead fw-normal mb-md-0">
            <a
              href="/docs/5.3/getting-started/javascript/"
              className="icon-link icon-link-hover fw-semibold"
            >
              Learn more about Bootstrap JavaScript
              <FiArrowRight className="mt-1" />
            </a>
          </p>
        </div>
        <div className="row gx-md-5">
          <div className="col-lg-6 mb-3">
            <h3 className="fw-semibold">Data attribute API</h3>
            <p>
              Why write more JavaScript when you can write HTML? Nearly all of
              Bootstrap's JavaScript plugins feature a first-class data API,
              allowing you to use JavaScript just by adding <code>data</code>{" "}
              attributes.
            </p>
            <div className="p-4 mb-3 border rounded-3">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      Dropdown item
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Dropdown item
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Dropdown item
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="highlight">
              <pre
                tabIndex={0}
                className="chroma border border-1 p-3 rounded rounded-3"
              >
                <code className="language-html" data-lang="html">
                  {`<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Dropdown item</button></li>
    <li><button class="dropdown-item" type="button">Dropdown item</button></li>
    <li><button class="dropdown-item" type="button">Dropdown item</button></li>
  </ul>
</div>`}
                </code>
              </pre>
            </div>
            <p className="mt-3">
              Learn more about{" "}
              <a href="/docs/5.3/getting-started/javascript/#using-bootstrap-as-a-module">
                our JavaScript as modules
              </a>{" "}
              and{" "}
              <a href="/docs/5.3/getting-started/javascript/#programmatic-api">
                using the programmatic API
              </a>
              .
            </p>
          </div>
          <div className="col-lg-6 mb-3">
            <h3 className="fw-semibold">Comprehensive set of plugins</h3>
            <p>
              Bootstrap features a dozen plugins that you can drop into any
              project. Drop them in all at once, or choose just the ones you
              need.
            </p>
            <hr className="my-4" />
            <div className="row g-3">
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/alerts/#javascript-behavior"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Alert</h4>
                  <small className="text-body-secondary">
                    Show and hide alert messages to your users.
                  </small>
                </a>
              </div>
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/buttons/#button-plugin"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Button</h4>
                  <small className="text-body-secondary">
                    Programmatically control the active state for buttons.
                  </small>
                </a>
              </div>
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/carousel/"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Carousel</h4>
                  <small className="text-body-secondary">
                    Add slideshows to any page, including support for crossfade.
                  </small>
                </a>
              </div>
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/collapse/"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Collapse</h4>
                  <small className="text-body-secondary">
                    Expand and collapse areas of content, or create accordions.
                  </small>
                </a>
              </div>
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/dropdowns/"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Dropdown</h4>
                  <small className="text-body-secondary">
                    Create menus of links, actions, forms, and more.
                  </small>
                </a>
              </div>
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/modal/"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Modal</h4>
                  <small className="text-body-secondary">
                    Add flexible and responsive dialogs to your project.
                  </small>
                </a>
              </div>
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/offcanvas/"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Offcanvas</h4>
                  <small className="text-body-secondary">
                    Build and toggle hidden sidebars into any page.
                  </small>
                </a>
              </div>
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/popovers/"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Popover</h4>
                  <small className="text-body-secondary">
                    Create custom overlays. Built on Popper.
                  </small>
                </a>
              </div>
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/scrollspy/"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Scrollspy</h4>
                  <small className="text-body-secondary">
                    Automatically update active nav links based on page scroll.
                  </small>
                </a>
              </div>
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/navs-tabs/"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Tab</h4>
                  <small className="text-body-secondary">
                    Allow Bootstrap nav components to toggle contents.
                  </small>
                </a>
              </div>
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/toasts/"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Toast</h4>
                  <small className="text-body-secondary">
                    Show and hide notifications to your visitors.
                  </small>
                </a>
              </div>
              <div className="col-sm-6 mb-2">
                <a
                  className="d-block pe-lg-4 text-decoration-none lh-sm"
                  href="/docs/5.3/components/tooltips/"
                >
                  <h4 className="mb-0 fs-5 fw-semibold">Tooltip</h4>
                  <small className="text-body-secondary">
                    Replace browser tooltips with custom ones. Built on Popper.
                  </small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BootPlugin;
