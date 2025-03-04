import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './Button';

@customElement('user-form')
export class UserForm extends LitElement {
  @property({ type: String }) formMode = 'add'; 

  static styles = css`
    .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .modal-content {
      background-color: whitesmoke;
      margin: 10% auto;
      padding: 20px;
      width: 50%;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .close {
      float: right;
      font-size: 24px;
      cursor: pointer;
    }
    h2 {
      font-size: 1rem;
      text-align: center;
      font-family: "Archivo", serif;
    }
    label {
      font-family: "Roboto", serif;
      font-size: 0.9rem;
      display: block;
      margin-top: 10px;
    }
    input {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .error-msg {
      font-family: "Roboto", serif;
      font-size: 0.9rem;
      color: #89A8B2;
      margin-top: 5px;
    }
]
  `;

  private showModal() {
    const modal = this.shadowRoot?.getElementById('userModal');
    if (modal) modal.style.display = 'block';
  }

  private closeModal() {
    const modal = this.shadowRoot?.getElementById('userModal');
    if (modal) modal.style.display = 'none';
  }

  render() {
    return html`
      <div id="userModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="${this.closeModal}">&times;</span>
          <h2>${this.formMode === 'modify' ? 'Modify User' : 'Add User'}</h2>
          <form id="user-form">
            <label>First Name:</label>
            <input type="text" id="firstName" required />
            <label>Last Name:</label>
            <input type="text" id="lastName" required />
            <label>Email:</label>
            <input type="email" id="email" required />
            <app-button label="${this.formMode === 'modify' ? 'Update' : 'Submit'}"></app-button>
          </form>
        </div>
      </div>
    `;
  }
}
