import { LitElement, html } from 'lit-element';
import './shadow-input-three';
import './shadow-button-three';

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
        <p>
          This method loses shadow DOM benefits for the component, but allows
          complete external styling with ease.
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
