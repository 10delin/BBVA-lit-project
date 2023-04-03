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
                description=${user.email}
              ></presentation-card>
            `
        )}
      </div>
    `;
  }
}

customElements.define("dashboard-page", Dashboard);
