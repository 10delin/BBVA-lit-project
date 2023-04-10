import { LitElement, html } from "lit";
import { Mixin } from "./Mixin";
import { CLIENTS } from "../model";

export class LoginDataManager extends Mixin(LitElement) {
  static get properties() {
    return {
      users: { type: Object },
      error: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.users = {};
    this.error = false;
  }

  login(customer) {
    if (
      customer.user == CLIENTS[0].userName &&
      customer.password == CLIENTS[0].password
    ) {
      this._requestUsers()
        .then((response) => {
          this.users = {
            users: response.results,
            name: response.results[0]?.name?.first,
          };
          this._fireEvent("login-success", this.users);
        })
        .catch((error) => {
          this.error = true;
          this._fireEvent("login-fail", error);
        });
    } else {
      let error = {
        code: -1,
        message: "Autenticación fallida",
      };
      this._fireEvent("login-fail", error);
    }
  }

  async _requestUsers() {
    const response = await fetch("https://randomuser.me/api?results=25");
    return await response.json();
  }
}
customElements.define("login-dm", LoginDataManager);
