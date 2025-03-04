import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-button')
export class Button extends LitElement {
  @property({ type: String }) label = 'Click Me';

  static styles = css`
    .btn-primary {
      background-color: #B3C8CF;
      border: none;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      cursor: pointer;
      border-radius: 2px;
      color : white;
    }
    .btn-primary:hover {
      background-color: #D1E1E6;
    }
  `;

  render() {
    return html`
      <button class="btn-primary">${this.label}</button>
    `;
  }
}
