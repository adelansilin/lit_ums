import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';


@customElement('user-form')
export class UserForm extends LitElement {
  @property({ type: String }) formMode = 'add'; 

  createRenderRoot() {
    return this; 
  }

  render() {
    return html`
      <div id="userModal" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 id="form-heading" class="modal-title w-100 text-center">
                ${this.formMode === 'modify' ? 'Modify User' : 'Add User'}
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body py-0">
              <form id="user-form" class="row g-3">
                <div class="col-md-6">
                                    <label for="firstName" class="form-label">First Name</label>
                                    <input type="text" id="firstName" name="firstName" class="form-control" required pattern="[A-Za-z]+" title="Only alphabets are allowed">
                                </div>
                                <div class="col-md-6">
                                    <label for="lastName" class="form-label">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" class="form-control" required pattern="[A-Za-z]+" title="Only alphabets are allowed">
                                </div>
                                <div class="col-md-6">
                                    <label for="age" class="form-label">Age</label>
                                    <input type="number" id="age" name="age" class="form-control" required min="18" max="100" title="Age must be between 18 and 100">
                                </div>
                                <div class="col-md-6">
                                    <label for="gender" class="form-label">Gender</label>
                                    <select id="gender" name="gender" class="form-select" required>
                                        <option value="" disabled selected>Select your gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="not_preferred">Prefer Not to Say</option>
                                    </select>
                                </div>
                                <div class="col-md-12">
                                    <label for="email" class="form-label">E-mail</label>
                                    <input type="email" id="email" name="email" class="form-control" required >
                                </div>
                                
                                <div class="col-md-6">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" id="username" name="username" class="form-control" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" id="password" name="password" class="form-control" required minlength="8" title="Password must be at least 8 characters long" >
                                </div>
                                <div class="col-md-6">
                                    <label for="phone" class="form-label">Mobile No</label>
                                    <input type="text" id="phone" name="phone" class="form-control" title="Please enter a valid phone number">
                                </div>
                                <div class="col-md-6">
                                    <label for="birthDate" class="form-label">Birth Date</label>
                                    <input type="date" id="birthDate" name="birthDate" class="form-control" required >
                                </div>
                <div class="col-md-2 mx-auto pb-2">
                <button type="submit"> ${this.formMode === 'modify' ? 'Update' : 'Submit'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
