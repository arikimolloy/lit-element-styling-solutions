import { LitElement, html } from 'lit-element';
import consumerStyles from '../../consumer-styles.js';
import './shadow-input-one';
import './shadow-button-one';

export default class ShadowFormOne extends LitElement {
  static get styles() {
    return [consumerStyles];
  }

  render() {
    return html`
      <div class="form-contents">
        <slot name="description"></slot>
        <form>
          <shadow-input-one></shadow-input-one>
          <shadow-button-one></shadow-button-one>
        </form>
      </div>
    `;
  }
}
customElements.define('shadow-form-one', ShadowFormOne);
