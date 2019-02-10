import { LitElement, html } from 'lit-element';
import './global-styles';

export default class ShadowInputFive extends LitElement {
  static get styles() {
    return [window.GlobalShadowStyles['shadow-input-five']];
  }

  render() {
    return html`
      <label for="input">My Label Five</label>
      <input id="input" placeholder="Enter a value" />
    `;
  }
}
customElements.define('shadow-input-five', ShadowInputFive);
