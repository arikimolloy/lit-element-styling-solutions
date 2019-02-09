import { LitElement, html } from 'lit-element';
import '@arikimolloy/shadow-form/shadow-form-one';
import '@arikimolloy/shadow-form/shadow-form-two';
import myStyles from '../../consumer-styles';

export default class StylingSolutionsDemo extends LitElement {
  static get styles() {
    return myStyles;
  }

  render() {
    return html`
      <h1>LitElement Styling Solutions</h1>
      <div class="form-container">
        <shadow-form-one>
          <h3 slot="title">ShadowFormOne</h3>
        </shadow-form-one>
      </div>
      <div class="form-container">
        <shadow-form-two>
          <h3 slot="title">ShadowFormTwo</h3>
        </shadow-form-two>
      </div>
    `;
  }
}
customElements.define('styling-solutions-demo', StylingSolutionsDemo);
