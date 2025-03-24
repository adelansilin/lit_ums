import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-header')
export class Header extends LitElement {
  static styles = css`
    header {
      background-color: #2E3944;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3rem;
      color: white;
      font-family: "Archivo", serif;
    }
    h1 {
      font-style: italic;
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1rem;
      margin-left: 4rem;
      margin: auto;
    }
  `;

  render() {
    return html`
      <header>
        <h1>ProfileEdge</h1>
        <h2>User Management System</h2>
      </header>
    `;
  }
}
