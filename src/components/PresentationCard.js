import { LitElement, html, css } from "lit";

class PresentationCard extends LitElement {
  static get styles() {
    return css`
      .card {
        display: inline-grid;
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
      username: { type: String },
      gender: { type: String },
      phone: { type: String },
      email: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postcode: { type: String },
      street: { type: String },
      number: { type: String },
      timezone: { type: String },
      isDisabled: { type: Boolean },
      showMore: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.imageSrc = "";
    this.firstName = "";
    this.lastName = "";
    this.username = "";
    this.gender = "";
    this.phone = "";
    this.email = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.postcode = "";
    this.street = "";
    this.number = "";
    this.timezone = "";
    this.isDisabled = false;
    this.showMore = false;
  }

  render() {
    return html`
      <div class="card">
        <img class="image" src="${this.imageSrc}" />
        <h2 class="title">${this.firstName} ${this.lastName}</h2>
        <p class="description">Username: ${this.username}</p>
        ${this.showMore
          ? html`
              <p>Gender: ${this.gender}</p>
              <p>Phone: ${this.phone}</p>
              <p>Email: ${this.email}</p>
              <p>City: ${this.city}</p>
              <p>State: ${this.state}</p>
              <p>Country: ${this.country}</p>
              <p>Postcode: ${this.postcode}</p>
              <p>Street: ${this.street}</p>
              <p>Number: ${this.number}</p>
              <p>Timezone: ${this.timezone}</p>
            `
          : null}
        <button-component
          ?isDisabled=${this.isDisabled}
          @click=${this._showMore}
          >${this.showMore ? "Mostrar menos" : "Mostrar mas"}</button-component
        >
      </div>
    `;
  }
  _showMore() {
    this.showMore = !this.showMore;
  }
}

customElements.define("presentation-card", PresentationCard);
