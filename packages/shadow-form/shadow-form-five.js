import { LitElement, html } from 'lit-element';
import '@arikimolloy/shadow-input/shadow-input-five';
import '@arikimolloy/shadow-button/shadow-button-five';

export default class ShadowFormFive extends LitElement {
  static get styles() {
    return [window.GlobalShadowStyles];
  }

  render() {
    return html`
      <div class="form-contents">
        <slot name="description"></slot>
        <form>
          <shadow-input-five></shadow-input-five>
          <shadow-button-five></shadow-button-five>
        </form>
      </div>
    `;
  }
}
customElements.define('shadow-form-five', ShadowFormFive);
