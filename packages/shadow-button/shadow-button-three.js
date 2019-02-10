import { LitElement, html } from 'lit-element';

export default class ShadowButtonThree extends LitElement {
  createRenderRoot() {
    return this; // render to the light DOM
  }

  render() {
    return html`
      <button>ShadowButtonThree</button>
    `;
  }
}
customElements.define('shadow-button-three', ShadowButtonThree);
