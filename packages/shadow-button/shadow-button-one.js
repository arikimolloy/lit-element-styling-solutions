import { LitElement, html } from 'lit-element';
import consumerStyles from '../../consumer-styles';

export default class ShadowButtonOne extends LitElement {
  static get styles() {
    return [consumerStyles];
  }

  render() {
    return html`
      <button>ShadowButtonOne</button>
    `;
  }
}
customElements.define('shadow-button-one', ShadowButtonOne);
