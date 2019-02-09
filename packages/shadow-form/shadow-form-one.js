import { LitElement, html } from 'lit-element';
import consumerStyles from '../../consumer-styles.js';
import '@arikimolloy/shadow-input/shadow-input-one';
import '@arikimolloy/shadow-button/shadow-button-one';

export default class ShadowFormOne extends LitElement {
  static get styles() {
    return [consumerStyles];
  }

  render() {
    return html`
      <slot name="title"></slot>
      <p>
        This element chain imports css literals and uses the LitElement static
        styles getter.
      </p>
      <form>
        <shadow-input-one></shadow-input-one>
        <shadow-button-one></shadow-button-one>
      </form>
    `;
  }
}
customElements.define('shadow-form-one', ShadowFormOne);
