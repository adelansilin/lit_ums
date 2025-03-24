import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-button')
export class Button extends LitElement {
  @property({ type: String }) label = 'Click Me';

  static styles = css`
    .btn-primary {
      background-color: #748D92;
      border: none;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      cursor: pointer;
      border-radius: 2px;
      color : white;
    }
    .btn-primary:hover {
      background-color: #D3D9D4;
    }
  `;

  render() {
    return html`
      <button class="btn-primary">${this.label}</button>
    `;
  }
}

