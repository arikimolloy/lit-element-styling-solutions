import { LitElement, html } from 'lit-element';
import consumerStyles from '../../consumer-styles';

export default class ShadowInputOne extends LitElement {
  static get styles() {
    return [consumerStyles];
  }

  render() {
    return html`
      <label for="input">My Label One</label>
      <input id="input" placeholder="Enter a value" />
    `;
  }
}
customElements.define('shadow-input-one', ShadowInputOne);
