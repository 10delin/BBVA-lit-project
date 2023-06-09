import { LitElement, html } from "lit";

export class Home extends LitElement {
  static get properties() {
    return {
      isLoginSuccess: { type: Boolean },
      users: { type: Array },
      error: { type: Boolean },
      message: { type: String },
    };
  }

  constructor() {
    super();
    this.isLoginSuccess = false;
    this.users = [];
    this.error = false;
    this.message = "";
  }

  render() {
    return html`
      <app-header></app-header>
      ${this.isLoginSuccess ? this._cardPage() : this._loginPage()}
    `;
  }

  _cardPage() {
    return html`<dashboard-page .users=${this.users}></dashboard-page>`;
  }

  _loginPage() {
    return html`
      <login-page id="loginUI" @validate-login=${this._validateLogin}>
      </login-page>
      <login-dm
        id="loginDM"
        @login-success=${this._handleLoginSuccess}
        @login-fail=${this._handleLoginError}
      >
      </login-dm>
      ${this.error
        ? html`<error-popup message=${this.message}></error-popup>`
        : null}
    `;
  }

  _validateLogin(event) {
    let loginDM = this.shadowRoot.getElementById("loginDM");
    loginDM.login(event.detail);
  }

  _handleLoginSuccess(event) {
    this.users = event.detail.users;
    this.isLoginSuccess = true;
  }

  _handleLoginError(event) {
    this.message = event.detail.message;
    if (event.detail.code == -1) return (this.error = true);
  }
}

customElements.define("home-page", Home);
