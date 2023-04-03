import { LitElement, html, css } from "lit";

export class Button extends LitElement {
  static get styles() {
    return css`
      button {
        padding: 10px 20px;
        border: none;
        border-radius: 1px;
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        background-color: #1973b8;
      }
      button:hover {
        background-color: #1e90ff;
      }
      button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    `;
  }

  static get properties() {
    return {
      isDisabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.isDisabled = false;
  }

  render() {
    return html`
      <button type="button" ?disabled=${this.isDisabled}>
        <slot></slot>
      </button>
    `;
  }
}
customElements.define("button-component", Button);
