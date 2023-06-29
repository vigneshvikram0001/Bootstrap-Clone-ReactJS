import React from "react";
import { BsFillBoxSeamFill, BsGlobe } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import webpack from "../images/Boot Webpack.svg"
import parcel from "../images/Boot Parsel.png"
import vite from "../images/Boot Vite.svg"
import { FiCode } from "react-icons/fi";

function BootInstall() {
  return (
    <div className="bootInstall pad">
      <div className="container-xxl bd-gutter masthead-followup">
        <div className="col-lg-7 mx-auto pb-3 mb-3 mb-md-5 text-md-center mt-5">
          <div
            className="masthead-followup-icon d-inline-block mb-3 me-2 p-3 px-4 rounded-3"
            style={{ backgroundColor: "#ddaffb" }}
          >
            <FiCode style={{ color: "#9a00ff" }} className="fs-2" />
          </div>
          <h2 className="display-5 mb-3 fw-semibold lh-sm">
            Get started any way you&nbsp;want
          </h2>
          <p className="lead fw-normal">
            Jump right into building with Bootstrap—use the CDN, install it via
            package manager, or download the source code.
          </p>
          <p className="d-flex justify-content-md-start justify-content-md-center lead fw-normal">
            <a
              href="/docs/5.3/getting-started/download/"
              className="icon-link icon-link-hover fw-semibold ps-md-4"
            >
              Read installation docs
              <FiArrowRight className="mt-1" />
            </a>
          </p>
        </div>
      </div>

      <section className="row g-3 g-md-5 mb-5 pb-5 justify-content-center">
        <div className="col-lg-6 py-lg-4 pe-lg-5">
          <BsFillBoxSeamFill className="fs-2 mb-3" />
          <h3 className="fw-semibold">Install via package manager</h3>
          <p className="pe-lg-5">
            Install Bootstrap’s source Sass and JavaScript files via npm,
            RubyGems, Composer, or Meteor. Package managed installs don’t
            include documentation or our full build scripts. You can also{" "}
            <a href="https://github.com/twbs/examples/">
              use any demo from our Examples repo
            </a>{" "}
            to quickly jumpstart Bootstrap projects.
          </p>
          <div className="highlight py-3 px-4 border border-1 rounded">
            <pre tabIndex={0} className="chroma">
              <code className="language-sh" data-lang="sh">
                <span className="line">
                  <span className="cl">npm install bootstrap@5.3.0</span>
                </span>
              </code>
            </pre>
          </div>
          <div className="highlight mt-2 py-3 px-4 border border-1 rounded">
            <pre tabIndex={0} className="chroma">
              <code className="language-sh" data-lang="sh">
                <span className="line">
                  <span className="cl">gem install bootstrap -v 5.3.0</span>
                </span>
              </code>
            </pre>
          </div>
          <p className="mt-3">
            <a href="/docs/5.3/getting-started/download/">
              Read our installation docs
            </a>{" "}
            for more info and additional package managers.
          </p>
        </div>
        <div className="col-lg-6 py-lg-4 ps-lg-5 border-lg-start">
          <BsGlobe className="fs-2 mb-3" />
          <h3 className="fw-semibold">Include via CDN</h3>
          <p className="pe-lg-5">
            When you only need to include Bootstrap’s compiled CSS or JS, you
            can use{" "}
            <a href="https://www.jsdelivr.com/package/npm/bootstrap">
              jsDelivr
            </a>
            . See it in action with our simple{" "}
            <a href="/docs/5.3/getting-started/introduction/#quick-start">
              quick start
            </a>
            , or <a href="/docs/5.3/examples/">browse the examples</a> to
            jumpstart your next project. You can also choose to include Popper
            and our JS{" "}
            <a href="/docs/5.3/getting-started/introduction/#separate">
              separately
            </a>
            .
          </p>
          <div className="highlight">
            <pre
              tabIndex={0}
              className="chroma py-3 px-4 border border-1 rounded"
            >
              <code className="language-html" data-lang="html">
                <span className="line ">
                  <span className="cl">
                    <span className="p">&lt;</span>
                    <span className="nt">link</span>{" "}
                    <span className="na">href</span>
                    <span className="o">=</span>
                    <span className="s">
                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                    </span>{" "}
                    <span className="na">rel</span>
                    <span className="o">=</span>
                    <span className="s">"stylesheet"</span>{" "}
                    <span className="na">integrity</span>
                    <span className="o">=</span>
                    <span className="s">
                      "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                    </span>{" "}
                    <span className="na">crossorigin</span>
                    <span className="o">=</span>
                    <span className="s">"anonymous"</span>
                    <span className="p">&gt;</span>
                  </span>
                </span>
              </code>
            </pre>
          </div>
          <div className="highlight">
            <pre
              tabIndex={0}
              className="chroma py-3 px-4 border border-1 rounded"
            >
              <code className="language-html" data-lang="html">
                <span className="line">
                  <span className="cl">
                    <span className="p">&lt;</span>
                    <span className="nt">script</span>{" "}
                    <span className="na">src</span>
                    <span className="o">=</span>
                    <span className="s">
                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                    </span>{" "}
                    <span className="na">integrity</span>
                    <span className="o">=</span>
                    <span className="s">
                      "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                    </span>{" "}
                    <span className="na">crossorigin</span>
                    <span className="o">=</span>
                    <span className="s">"anonymous"</span>
                    <span className="p">&gt;&lt;/</span>
                    <span className="nt">script</span>
                    <span className="p">&gt;</span>
                  </span>
                </span>
              </code>
            </pre>
          </div>
        </div>
        <div className="col-md-8 mx-auto text-center">
          <h4 className="fw-semibold">Read our getting started guides</h4>
          <p>
            Get a jump on including Bootstrap's source files in a new project
            with our official guides.
          </p>
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 mt-4">
            <a
              className="d-flex flex-column align-items-center text-decoration-none animate-img"
              href="/docs/5.3/getting-started/webpack"
            >
              <img
                className="d-block mb-2"
                src={webpack}
                alt="Bootstrap"
                width={72}
                height={72}
                loading="lazy"
              />
              <span className="text-body-secondary">Webpack</span>
            </a>
            <a
              className="d-flex flex-column align-items-center text-decoration-none animate-img"
              href="/docs/5.3/getting-started/parcel"
            >
              <img
                className="d-block mb-2"
                src={parcel}
                alt="Bootstrap"
                width={72}
                height={72}
                loading="lazy"
              />
              <span className="text-body-secondary">Parcel</span>
            </a>
            <a
              className="d-flex flex-column align-items-center text-decoration-none animate-img"
              href="/docs/5.3/getting-started/vite"
            >
              <img
                className="d-block mb-2"
                src={vite}
                alt="Bootstrap"
                width={72}
                height={72}
                loading="lazy"
              />
              <span className="text-body-secondary">Vite</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BootInstall;
