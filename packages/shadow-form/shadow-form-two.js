import { LitElement, html } from 'lit-element';
import '@arikimolloy/shadow-input/shadow-input-two';
import '@arikimolloy/shadow-button/shadow-button-two';

export default class ShadowFormTwo extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="../../consumer-styles.css" />
      <slot name="title"></slot>
      <p>This element chain imports a css stylesheet.</p>
      <form>
        <shadow-input-two></shadow-input-two>
        <shadow-button-two></shadow-button-two>
      </form>
    `;
  }
}
customElements.define('shadow-form-two', ShadowFormTwo);
