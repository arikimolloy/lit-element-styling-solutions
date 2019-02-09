import { LitElement, html } from 'lit-element';

export default class ShadowInputTwo extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="consumer-styles.css" />
      <label for="input">My Label Two</label>
      <input id="input" placeholder="Enter a value" />
    `;
  }
}
customElements.define('shadow-input-two', ShadowInputTwo);
