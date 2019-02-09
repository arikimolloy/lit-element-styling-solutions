import { LitElement, html } from 'lit-element';

export default class ShadowInputThree extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <label for="input">My Label Three</label>
      <input id="input" placeholder="Enter a value" />
    `;
  }
}
customElements.define('shadow-input-three', ShadowInputThree);
