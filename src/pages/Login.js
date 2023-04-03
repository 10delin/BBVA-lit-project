import { LitElement, html, css } from "lit";
import { Mixin } from "../components/Mixin";

class Login extends Mixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: flex;
        margin-top: 300px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      h3 {
        font-family: "Roboto", sans-serif;
      }
      .login {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .login__input {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        gap: 15px;
      }
      input-form {
        margin: 5px;
      }
      button {
        margin: 10px;
        width: 100px;
        height: 30px;
        border-radius: 5px;
        background-color: #1e90ff;
        color: white;
        border: none;
        cursor: pointer;
      }
      button:hover {
        background-color: #0000ff;
      }
    `;
  }

  static get properties() {
    return {
      userConfig: { type: Object },
      passwordConfig: { type: Object },
      user: { type: String },
      password: { type: String },
      type: { type: String },
      isDisabled: { type: Boolean },
    };
  }
  constructor() {
    super();
    this.userConfig = {};
    this.passwordConfig = {};
    this.user = "";
    this.password = "";
    this.type = "text";
    this.isDisabled = true;
  }

  render() {
    return html`
      <form class="login">
        <h3>
          Hola, introduce tu usuario y clave de acceso y entra en BBVA online:
        </h3>
        <div class="login__input">
          <input-form
            id="userField"
            @input=${this._onChangedUser}
            .maxLength=${this.userConfig.maxLength}
            .type=${this.type}
            placeholder="Usuario"
          ></input-form>
          <input-form
            id="passwordField"
            @input=${this._onChangedPassword}
            .maxLength=${this.userConfig.maxLength}
            type="password"
            placeholder="Clave de acceso"
            >></input-form
          >
          <button-component
            @click=${this._singOnClick}
            id="signOnButton"
            ?isDisabled=${this.isDisabled}
          >
            Iniciar Sesion
          </button-component>
        </div>
      </form>
    `;
  }

  _singOnClick() {
    let dataUser = {
      user: this.user,
      password: this.password,
    };
    this._fireEvent("validate-login", dataUser);
  }

  _onChangedUser(event) {
    if (event.detail) {
      this.user = event.detail.value;
      this._validateForm();
    }
  }

  _onChangedPassword(event) {
    if (event.detail) {
      this.password = event.detail.value;
      this._validateForm();
    }
  }

  _validateForm() {
    this.shadowRoot.querySelector("#signOnButton").isDisabled =
      this.user.length == 0 || this.password.length == 0;
  }
}

customElements.define("login-page", Login);
