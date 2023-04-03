import { LitElement, html, css } from "lit";
import imageBBVA from "../assets/images/bbva.png";

export class Header extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        align-items: center;
        padding: 0 20px;
        background-color: #072146;
        color: #fff;
        height: 80px;
      }
      header {
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 60px;
      }
      header img {
        width: 130px;
        height: 100%;
        color: #fff;
        object-fit: contain;
        filter: brightness(0) invert(1);
      }
      .header__access {
        font-family: BentonSansBBVA-Medium, Helvetica, Arial, sans-serif;
        font-size: 15px;
        font-weight: 600;
        line-height: 24px;
        will-change: background-position;
        background-size: 210% 100%;
        background-position: 99% center;
        background-repeat: no-repeat;
        -webkit-transition: background-position 0.66667s
          cubic-bezier(0.24, 0.22, 0.31, 1.07);
        transition: background-position 0.66667s
          cubic-bezier(0.24, 0.22, 0.31, 1.07);
        background-color: #028484;
        background-image: linear-gradient(100deg, #02a5a5 50%, #028484 50%);
        color: #fff;
        text-align: center;
        padding: 14px 24px;
        margin-left: 24px;
        background-color: #028484;
        text-decoration: none;
        cursor: pointer;
      }
      header a:hover {
        background-position: 0 center;
      }
    `;
  }

  render() {
    return html`
      <header>
        <a href="/"><img src=${imageBBVA} /></a>
        <a href="/" class="header__access">Acceso</a>
      </header>
    `;
  }
}

customElements.define("app-header", Header);
