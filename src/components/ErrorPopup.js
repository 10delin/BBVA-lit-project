import { LitElement, html, css } from "lit";

class ErrorPopup extends LitElement {
  static get properties() {
    return {
      message: { type: String },
    };
  }

  static get styles() {
    return css`
      .error {
        background-color: #f8d7da;
        color: #721c24;
        padding: 8px;
        border-radius: 4px;
        margin-top: 8px;
      }
    `;
  }

  render() {
    return html` <div class="error">${this.message}</div> `;
  }
}

customElements.define("error-popup", ErrorPopup);
