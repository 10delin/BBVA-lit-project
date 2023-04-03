import { LitElement } from "lit";
import { Mixin } from "./Mixin";

export class LoginDataManager extends Mixin(LitElement) {
  static get properties() {
    return {
      users: { type: Object },
    };
  }

  constructor() {
    super();
    this.users = {};
  }

  login(customer) {
    if (customer.user == "antonio" && customer.password == "123") {
      this._requestUsers()
        .then((response) => {
          this.users = {
            users: response.results,
            name: response.results[0]?.name?.first,
          };
          this._fireEvent("login-success", this.users);
        })
        .catch((error) => {
          this._fireEvent("login-fail", error);
        });
    } else {
      let error = {
        code: -1,
        message: "Authentication Failed",
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
