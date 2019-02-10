import { LitElement, html } from 'lit-element';

export default class ShadowButtonFive extends LitElement {
  static get styles() {
    return [window.GlobalShadowStyles];
  }

  render() {
    return html`
      <button>ShadowButtonFive</button>
    `;
  }
}
customElements.define('shadow-button-five', ShadowButtonFive);
