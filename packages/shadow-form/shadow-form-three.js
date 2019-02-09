import { LitElement, html } from 'lit-element';
import '@arikimolloy/shadow-input/shadow-input-three';
import '@arikimolloy/shadow-button/shadow-button-three';

export default class ShadowFormThree extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="form-contents">
        <h3>ShadowFormThree</h3>
        <p>
          This element chain renders to the light DOM.
        </p>
        <form>
          <shadow-input-three></shadow-input-three>
          <shadow-button-three></shadow-button-three>
        </form>
      </div>
    `;
  }
}
customElements.define('shadow-form-three', ShadowFormThree);
