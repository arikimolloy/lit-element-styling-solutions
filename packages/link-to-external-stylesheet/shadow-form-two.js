import { LitElement, html } from 'lit-element';
import './shadow-input-two';
import './shadow-button-two';

export default class ShadowFormTwo extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="consumer-styles.css" />
      <div class="form-contents">
        <slot name="description"></slot>
        <form>
          <shadow-input-two></shadow-input-two>
          <shadow-button-two></shadow-button-two>
        </form>
      </div>
    `;
  }
}
customElements.define('shadow-form-two', ShadowFormTwo);
