import { LitElement, html, css } from "lit";

class InputForm extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      input {
        width: 300px;
        height: 40px;
        border: none;
        border-bottom: 1px solid #000000;
        padding: 0 10px;
        font-size: 1rem;
        font-weight: 500;
        background-color: #f4f4f4;
      }
      input:focus {
        outline: none;
      }
    `;
  }

  static get properties() {
    return {
      type: { type: String },
      placeholder: { type: String },
      maxLength: { type: Number },
      value: { type: String },
    };
  }

  constructor() {
    super();
    this.value = "";
    this.maxLength = 0;
    this.type = "text";
  }

  render() {
    return html`
      <input
        .type=${this.type}
        placeholder=${this.placeholder}
        maxlength=${this.maxLength}
      />
    `;
  }

  firstUpdated() {
    this.shadowRoot
      .querySelector("input")
      .addEventListener("input", this._updateValue.bind(this));
  }

  _updateValue(event) {
    let inputData = {
      value: event.target.value,
    };
    this._fireEvent("input", inputData);
  }

  _fireEvent(eventName, detail = {}) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: detail,
      })
    );
  }
}

customElements.define("input-form", InputForm);
