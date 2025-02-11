import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-footer')
export class Footer extends LitElement {
  static styles = css`
    footer {
      background-color: #B3C8CF;
      color: white;
      text-align: center;
      font-size: 0.6rem;
      height: 2rem;
    }
  `;

  render() {
    return html`
      <footer>
        <p>Copyright © 2024 Annalect. An Omnicom Media Group Company.</p>
      </footer>
    `;
  }
}
