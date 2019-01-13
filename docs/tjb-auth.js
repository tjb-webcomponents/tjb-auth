import WebComponent from "https://tjb-webcomponents.github.io/tjb-webcomponent/tjb-wc.min.js";
import html from "https://tjb-webcomponents.github.io/html-template-string/html-template-string.js";
import "https://tjb-webcomponents.github.io/tjb-auth-login/tjb-auth-login.min.js";
import "https://tjb-webcomponents.github.io/tjb-auth-register/tjb-auth-register.min.js";
import "https://tjb-webcomponents.github.io/tjb-auth-reset/tjb-auth-reset.min.js";
import "https://tjb-webcomponents.github.io/tjb-auth-verify/tjb-auth-verify.min.js";

class tjbAuth extends WebComponent() {
  // Styles
  ////////////////////////////////////////////////////////////

  CSS() {
    return html`
      <style>
        :host {
          --color-info: grey;

          /* notify */
          --notify-background-error: #fa354c;
          --notify-background-success: limegreen;
          --notify-color-error: white;
          --notify-color-success: white;
          --notify-margin: -55px -40px 20px;
          --notify-padding: 15px 15px 15px 35px;

          /* input */
          --input-color-error: #fa354c;
          --input-color-success: limegreen;
          --input-padding: 10px;
          --input-margin: 0 0 30px 0;
          --input-width: 100%;
          --input-border: 1px solid transparent;
          --input-border-bottom: 1px solid lightgrey;
          --input-border-radius: 0;
          --input-font-size: 1rem;
          --input-info-color: grey;
          --input-info-font-size: 0.8rem;
          --input-label-margin: 0 0 5px 0;

          --background: #fff;
          --display: block;
          --max-width: 350px;
          --box-sizing: border-box;
          --overflow: hidden;
          --position: relative;
          --padding: 55px 40px 10px;
          --box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
        }

        ${["login", "register", "verify", "reset"].forEach(name => `
          tjb-auth-${name} {
            --color-${name}-info: var(--color-info);

            /* notify */
            --${name}-notify-background-error: var(--notify-background-error);
            --${name}-notify-background-success: var(--notify-background-success);
            --${name}-notify-color-error: var(--notify-color-error);
            --${name}-notify-color-success: var(--notify-color-success);
            --${name}-notify-margin: var(--notify-margin);
            --${name}-notify-padding: var(--notify-padding);

            /* input */
            --${name}-input-color-error: var(--input-color-error);
            --${name}-input-color-success: var(--input-color-success);
            --${name}-input-padding: var(--input-padding);
            --${name}-input-margin: var(--input-margin);
            --${name}-input-width: var(--input-width);
            --${name}-input-border: var(--input-border);
            --${name}-input-border-bottom: var(--input-border-bottom);
            --${name}-input-border-radius: var(--input-border-radius);
            --${name}-input-font-size: var(--input-font-size);
            --${name}-input-info-color: var(--input-info-color);
            --${name}-input-info-font-size: var(--input-info-font-size);
            --${name}-input-label-margin: var(--input-label-margin);

            background: var(--background);
            display: var(--display);
            max-width: var(--max-width);
            box-sizing: var(--box-sizing);
            overflow: var(--overflow);
            position: var(--position);
            padding: var(--padding);
            box-shadow: var(--box-shadow);
          }
        `)}
      </style>
    `;
  }

  // Markup
  ////////////////////////////////////////////////////////////

  HTML() {
    this.loginNode = html`
      <tjb-auth-login
        onredirect="${e => this.handleRedirect(e)}"
        onsuccess="${e => this.handleSuccess(e, "login")}"
        onerror="${e => this.handleError(e, "login")}"
        ${this.showlogin ? `` : `style="display:none"`}
        postbody="${this.postbody}"
        posturl="${this.loginurl}"
      >
        <slot name="submit-login" slot="submit"></slot>
      </tjb-auth-login>
    `;

    this.registerNode = html`
      <tjb-auth-register
        onredirect="${e => this.handleRedirect(e)}"
        onsuccess="${e => this.handleSuccess(e, "register")}"
        onerror="${e => this.handleError(e, "register")}"
        ${this.showregister ? `` : `style="display:none"`}
        postbody="${this.postbody}"
        posturl="${this.registerurl}"
      >
        <slot name="submit-register" slot="submit"></slot>
      </tjb-auth-register>
    `;

    this.resetNode = html`
      <tjb-auth-reset
        onredirect="${e => this.handleRedirect(e)}"
        onsuccess="${e => this.handleSuccess(e, "reset")}"
        onerror="${e => this.handleError(e, "reset")}"
        ${this.showreset ? `` : `style="display:none"`}
        postbody="${this.postbody}"
        mailurl="${this.mailurl}"
        posturl="${this.reseturl}"
      >
        <slot name="submit-reset" slot="submit"></slot>
      </tjb-auth-reset>
    `;

    this.verifyNode = html`
      <tjb-auth-verify
        onredirect="${e => this.handleRedirect(e)}"
        onsuccess="${e => this.handleSuccess(e, "verify")}"
        onerror="${e => this.handleError(e, "verify")}"
        ${this.showverify ? `` : `style="display:none"`}
        postbody="${this.postbody}"
        mailurl="${this.mailurl}"
        posturl="${this.verifyurl}"
      >
        <slot name="submit-verify" slot="submit"></slot>
      </tjb-auth-verify>
    `;

    return html`
      <data-fragment>
        ${this.loginNode} ${this.registerNode} ${this.resetNode}
        ${this.verifyNode}
      </data-fragment>
    `;
  }

  // Attribute Handling
  ////////////////////////////////////////////////////////////

  static get observedAttributes() {
    return ["postbody", "loginurl", "registerurl", "mailurl", "reseturl", "verifyurl", "showregister", "showlogin", "showreset", "showverify"];
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleShowregisterChange = this.reRender;
    this.handleShowloginChange = this.reRender;
    this.handleShowresetChange = this.reRender;
    this.handleShowverifyChange = this.reRender;

    if (!this.showlogin && !this.showverify && !this.showregister && !this.showreset) this.showregister = true;
  }

  // Logic
  ////////////////////////////////////////////////////////////

  handleRedirect(event) {
    const { target } = event.detail || event;

    console.log("redirect!", event, target);

    this.showlogin = target === "login";
    this.showregister = target === "register";
    this.showreset = target === "forgot";
    this.showverify = target === "verify";
  }

  handleSuccess(event, area) {
    if (area === "verify" || area === "forgot") {
      this.handleRedirect({ target: "login" });
      this.loginNode.messageNode.success = html`
        <ul>
          <li>That was successful, please login</li>
        </ul>
      `;
    }

    if (area === "register") {
      const email = this.registerNode.emailInput.value;
      this.verifyNode.email = email;
    }

    this._success = { area, event };
    this.dispatchEvent(`${area}-success`, event);
  }

  handleError(event, area) {
    this._error = { area, event };
    this.dispatchEvent(`${area}-error`, event);
  }
}

customElements.define("tjb-auth", tjbAuth);
