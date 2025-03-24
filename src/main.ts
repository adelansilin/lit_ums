declare var bootstrap: any;
import { html, render } from 'lit';

import './components/Header';
import './components/Sidebar';
import './components/Button';
import './components/Footer';
import './components/UserForm';
import './logic'

import './styles.css';

const template = html`
  <div class="parent">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main>
      <div class="button-container">
        <app-button label="+ Add New User" id="add-user-btn"></app-button>
        <app-button label="Modify User" id="modify-user-btn"></app-button>
      </div>
      <div id="formContainer">
        <user-form></user-form>
      </div>
      <span class="error-msg"></span>

    </main>
    <app-footer></app-footer>
  </div>
`;

class AppRoot extends HTMLElement {
  connectedCallback() {
    render(template, this);

    const addUserBtn = this.querySelector('#add-user-btn') as HTMLElement;
    const modifyUserBtn = this.querySelector('#modify-user-btn') as HTMLElement;

    // Function to open the form
    const openForm = (mode: 'add' | 'modify') => {
      console.log(`Opening form in ${mode} mode`);

      // Remove existing modal if any
      const existingModal = document.getElementById('userModal');
      if (existingModal) {
        console.log("Removing existing modal");
        existingModal.remove();
      }

      // Create new user form element
      const form = document.createElement('user-form');
      form.setAttribute('formMode', mode);
      document.body.appendChild(form);

      console.log("User form appended to the body");

      // Wait for the element to be added to the DOM
      setTimeout(() => {
        const modalElement = document.getElementById('userModal');
        if (modalElement) {
          console.log("Initializing Bootstrap modal");
          const bootstrapModal = new bootstrap.Modal(modalElement);
          bootstrapModal.show();
        } else {
          console.error("Modal element not found!");
        }
      }, 100); // Small delay to ensure rendering
    };

    // Event listeners for buttons
    addUserBtn?.addEventListener('click', () => openForm('add'));
    modifyUserBtn?.addEventListener('click', () => openForm('modify'));
  }
}

customElements.define('app-root', AppRoot);