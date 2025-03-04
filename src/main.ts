import { html, render } from 'lit';

import './components/Header';
import './components/Sidebar';
import './components/Button';
import './components/Footer';
import './components/UserForm';

import './styles.css';

const template = html`
  <div class="parent">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main>
      <div class="button-container">
        <app-button label="+ Add New User" id="addUserBtn"></app-button>
        <app-button label="Modify User" id="modifyUserBtn"></app-button>
      </div>
    </main>
    <app-footer></app-footer>
  </div>
`;

class AppRoot extends HTMLElement {
    connectedCallback() {
      render(template, this);
  
      const addUserBtn = this.querySelector('#addUserBtn');
      const modifyUserBtn = this.querySelector('#modifyUserBtn');
      const formContainer = this.querySelector('#formContainer');
  
      // Function to open the form
      const openForm = (mode: 'add' | 'modify') => {
        render(html`<user-form formMode="${mode}"></user-form>`, formContainer!);
      };
  
      // Event listeners
      addUserBtn?.addEventListener('click', () => openForm('add'));
      modifyUserBtn?.addEventListener('click', () => openForm('modify'));
    }
  }
  
  customElements.define('app-root', AppRoot);
