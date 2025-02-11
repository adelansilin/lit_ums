import { html, render } from 'lit';

import './components/Header';
import './components/Sidebar';
import './components/Button';
import './components/Footer';

import './styles.css';

const template = html`
  <div class="parent">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main>
      <div class="button-container">
        <app-button label="+ Add New User"></app-button>
        <app-button label="Modify User"></app-button>
      </div>
    </main>
    <app-footer></app-footer>
  </div>
`;

class AppRoot extends HTMLElement {
  connectedCallback() {
    render(template, this);
  }
}

customElements.define('app-root', AppRoot);
