import { LitElement, html } from 'lit-element';
import './shadow-input-five';
import './shadow-button-five';
import './global-styles';

export default class ShadowFormFive extends LitElement {
  static get styles() {
    return [window.GlobalShadowStyles['shadow-form-five']];
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
