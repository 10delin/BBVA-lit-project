import { LitElement, html, css } from "lit";

class PresentationCard extends LitElement {
  static get styles() {
    return css`
      .card {
        display: inline-block;
        margin: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 14px;
        width: 240px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }
      .card:hover {
        box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
      }

      .image {
        display: flex;
        width: 100px;
        border-radius: 50%;
        margin: 0px auto;
      }

      .title {
        font-size: 24px;
        margin: 16px 0 8px;
        text-align: center;
      }

      .description {
        font-size: 16px;
        margin: 8px 0 16px;
        text-align: center;
      }

      button-component {
        display: flex;
        justify-content: center;
      }
    `;
  }

  static get properties() {
    return {
      imageSrc: { type: String },
      firstName: { type: String },
      lastName: { type: String },
      description: { type: String },
      isDisabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.imageSrc = "";
    this.firstName = "";
    this.lastName = "";
    this.description = "";
    this.isDisabled = false;
  }

  render() {
    return html`
      <div class="card">
        <img class="image" src="${this.imageSrc}" />
        <h2 class="title">${this.firstName} ${this.lastName}</h2>
        <p class="description">${this.description}</p>
        <button-component ?isDisabled=${this.isDisabled}
          >Saber mas</button-component
        >
      </div>
    `;
  }
}

customElements.define("presentation-card", PresentationCard);
