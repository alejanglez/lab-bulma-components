import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a
              class="navbar-link"
              href="https://bulma.io/documentation/overview/start/"
            >
              About
            </a>
            <div class="navbar-dropdown is-boxed">
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/overview/start/"
              >
                Overview
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/overview/modifiers/"
              >
                Modifiers
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/columns/basics/"
              >
                Columns
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/layout/container/"
              >
                Layout
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/form/general/"
              >
                Form
              </a>
              <hr class="navbar-divider" />
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/elements/box/"
              >
                Elements
              </a>
              <a
                class="navbar-item is-active"
                href="https://bulma.io/documentation/components/breadcrumb/"
              >
                Components
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a
                  class="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="https://bulma.io"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
                >
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span>Log in</span>
                </a>
              </p>
              <p class="control">
                <a
                  class="button is-primary"
                  href="https://github.com/jgthms/bulma/releases/download/0.9.0/bulma-0.9.0.zip"
                >
                  <span class="icon">
                    <i class="fas fa-download"></i>
                  </span>
                  <span>Log out</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
