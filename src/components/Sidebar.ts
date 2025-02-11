import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-sidebar')
export class Sidebar extends LitElement {
  static styles = css`
    .sidebar {
      background-color: #B3C8CF;
      padding: 1rem;
      height: 100vh;
    }
  `;

  render() {
    return html`
      <aside class="sidebar">
        <h3></h3>
      </aside>
    `;
  }
}
