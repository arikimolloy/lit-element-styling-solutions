import { LitElement, html } from 'lit-element';
import './global-styles';

export default class ShadowButtonFive extends LitElement {
  static get styles() {
    return [window.GlobalShadowStyles['shadow-button-five']];
  }

  render() {
    return html`
      <button>ShadowButtonFive</button>
    `;
  }
}
customElements.define('shadow-button-five', ShadowButtonFive);
