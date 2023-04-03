import { LitElement, html, css } from "lit";

class TitleCard extends LitElement {
  static get styles() {
    return css`
      .title-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0;
        padding: 40px 16px;
        color: var(--narrowmarquee-background-default-text-color, #121212);
        background-color: var(
          --narrowmarquee-background-color-light-blue,
          #d4edfc
        );
      }
      .title-card__title {
        font-size: 29px;
        font-weight: bold;
      }
      .title-card__description {
        font-size: 16px;
        line-height: 24px;
        margin-top: 16px;
      }
    `;
  }

  get properties() {
    return {
      title: { type: String },
      description: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.description = "";
  }

  render() {
    return html` <div class="title-card">
        <h1 class="title-card__title">${this.title}</h1>
        <p class="title-card__description">${this.description}</p>
      </div>
      ;`;
  }
}

customElements.define("title-card", TitleCard);
