import { LitElement, html, css } from "lit";

class Dashboard extends LitElement {
  static get styles() {
    return css`
      .cards {
        margin-top: 80px;
      }
    `;
  }

  static get properties() {
    return {
      users: { type: Array },
      title: { type: String },
      description: { type: String },
    };
  }

  constructor() {
    super();
    this.users = [];
    this.title = "Clientes";
    this.description =
      "Conoce nuestros clientes mas destacados a lo largo de los años";
  }

  render() {
    return html`
      <div class="cards">
        <title-card
          .title=${this.title}
          .description=${this.description}
        ></title-card>
        ${this.users.map(
          (user) =>
            html`
              <presentation-card
                imageSrc=${user.picture.large}
                firstName=${user.name.first}
                lastName=${user.name.last}
                username=${user.login.username}
                gender=${user.gender}
                phone=${user.phone}
                email=${user.email}
                city=${user.location.city}
                state=${user.location.state}
                country=${user.location.country}
                postcode=${user.location.postcode}
                street=${user.location.street.name}
                number=${user.location.street.number}
                timezone=${user.location.timezone.offset}
              ></presentation-card>
            `
        )}
      </div>
    `;
  }
}

customElements.define("dashboard-page", Dashboard);
