import { LitElement, html } from 'lit-element';

export default class ShadowInputFour extends LitElement {
  render() {
    return html`
      <label for="input">My Label Four</label>
      <input id="input" placeholder="Enter a value" />
    `;
  }
}
