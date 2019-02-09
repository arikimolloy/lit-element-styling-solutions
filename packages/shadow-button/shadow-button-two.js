import { LitElement, html } from 'lit-element';

export default class ShadowButtonTwo extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="consumer-styles.css" />
      <button>ShadowButtonTwo</button>
    `;
  }
}
customElements.define('shadow-button-two', ShadowButtonTwo);
