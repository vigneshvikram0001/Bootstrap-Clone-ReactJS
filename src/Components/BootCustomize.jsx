import React from "react";
import { FiArrowRight, FiEdit } from "react-icons/fi";

function BootCustomize() {
  return (
    <div className="bootCustom pad">
      <section className="col-lg-7 mb-5">
        <div
          className="masthead-followup-icon d-inline-block mb-3 me-2 p-3 px-4 rounded-3"
          style={{ backgroundColor: "#bad3f9" }}
        >
          <FiEdit className="fs-2" style={{ color: "#043e97" }} />
        </div>
        <h2 className="display-5 mb-3 fw-semibold lh-sm">
          Customize everything with&nbsp;Sass
        </h2>
        <p className="lead fw-normal">
          Bootstrap utilizes Sass for a modular and customizable architecture.
          Import only the components you need, enable global options like
          gradients and shadows, and write your own CSS with our variables,
          maps, functions, and mixins.
        </p>
        <p className="d-flex justify-content-start lead fw-normal">
          <a
            href="/docs/5.3/customize/overview/"
            className="icon-link icon-link-hover fw-semibold"
          >
            Learn more about customizing
            <FiArrowRight className="mt-1" />
          </a>
        </p>
      </section>

      <section className="row g-md-5 mb-5 pb-md-5">
        <div className="col-lg-6">
          <h3>Include all of Bootstrap’s Sass</h3>
          <p>
            Import one stylesheet and you're off to the races with every feature
            of our CSS.
          </p>
          <div className="highlight mb-3 border border-1 rounded py-3 px-4">
            <pre tabIndex={0} className="chroma">
              <code className="language-scss" data-lang="scss">
                <span className="line">
                  <span className="cl">
                    <span className="c1">// Variable overrides first</span>
                  </span>
                </span>
                <span className="line">
                  <span className="cl">
                    <span className="c1" />
                    {"\n"}
                    <span className="nv">$primary</span>
                    <span className="o">:</span>{" "}
                    <span className="mh">#900</span>
                    <span className="p">;</span>
                  </span>
                </span>
                <span className="line">
                  <span className="cl">
                    {"\n"}
                    <span className="nv">$enable-shadows</span>
                    <span className="o">:</span> <span className="n">true</span>
                    <span className="p">;</span>
                  </span>
                </span>
                <span className="line">
                  <span className="cl">
                    {"\n"}
                    <span className="nv">$prefix</span>
                    <span className="o">:</span>
                    <span className="s2">"mo-"</span>
                    <span className="p">;</span>
                  </span>
                </span>
                <span className="line">
                  <span className="cl" />
                </span>
                {"\n"}
                <span className="line">
                  {"\n"}
                  <span className="cl">
                    <span className="c1">// Then import Bootstrap</span>
                  </span>
                </span>
                <span className="line">
                  <span className="cl">
                    <span className="c1" />
                    {"\n"}
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/bootstrap"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
              </code>
            </pre>
          </div>
          <p>
            Learn more about our{" "}
            <a href="/docs/5.3/customize/options/">global Sass options</a>.
          </p>
        </div>
        <div className="col-lg-6">
          <h3>Include what you need</h3>
          <p>
            The easiest way to customize Bootstrap—include only the CSS you
            need.
          </p>
          <div className="highlight mb-3 border border-1 rounded py-3 px-4">
            <pre tabIndex={0} className="chroma">
              <code className="language-scss" data-lang="scss">
                <span className="line">
                  <span className="cl">
                    <span className="c1">// Functions first</span>
                  </span>
                  {"\n"}
                </span>
                <span className="line">
                  <span className="cl">
                    <span className="c1" />
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/functions"
                    </span>
                    <span className="p">;</span>
                    {"\n"}
                    {"\n"}
                  </span>
                </span>
                <span className="line">
                  <span className="cl" />
                </span>
                <span className="line">
                  <span className="cl">
                    <span className="c1">// Variable overrides second</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="c1" />
                    <span className="nv">$primary</span>
                    <span className="o">:</span>{" "}
                    <span className="mh">#900</span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"/n"}
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="nv">$enable-shadows</span>
                    <span className="o">:</span> <span className="n">true</span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="nv">$prefix</span>
                    <span className="o">:</span>
                    <span className="s2">"mo-"</span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                {"\n"}
                <span className="line">
                  <span className="cl" />
                </span>
                <span className="line">
                  <span className="cl">
                    <span className="c1">// Required Bootstrap imports</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="c1" />
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/variables"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/variables-dark"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/maps"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/mixins"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/root"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                {"\n"}
                <span className="line">
                  <span className="cl" />
                </span>
                <span className="line">
                  <span className="cl">
                    <span className="c1">// Optional components</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="c1" />
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/utilities"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/reboot"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/containers"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/grid"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/helpers"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
                {"\n"}
                <span className="line">
                  <span className="cl">
                    <span className="k">@import</span>
                    <span className="s2">
                      "../node_modules/bootstrap/scss/utilities/api"
                    </span>
                    <span className="p">;</span>
                  </span>
                </span>
              </code>
            </pre>
          </div>
          <p>
            Learn more about{" "}
            <a href="/docs/5.3/customize/sass/">using Bootstrap with Sass</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default BootCustomize;
