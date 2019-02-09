import { LitElement, html } from 'lit-element';
import '@arikimolloy/shadow-form/shadow-form-one';
import '@arikimolloy/shadow-form/shadow-form-two';
import '@arikimolloy/shadow-form/shadow-form-three';
import './custom-styled-shadow-form-four';

export default class StylingSolutionsDemo extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="consumer-styles.css" />

      <h1>🔥 LitElement Styling Solutions 💄</h1>
      <div class="social-button-container">
        <a href="https://github.com/arikimolloy/lit-element-styling-solutions"
          ><img
            alt="undefined"
            src="https://img.shields.io/github/stars/arikimolloy/lit-element-styling-solutions.svg?style=social"
          />
        </a>
      </div>
      <div class="form-container">
        <shadow-form-one>
          <div slot="description">
            <h3>ShadowFormOne</h3>
            <p>
              This element chain imports css literals and uses the LitElement
              static styles getter.
            </p>
          </div>
        </shadow-form-one>
      </div>
      <div class="form-container">
        <shadow-form-two>
          <div slot="description">
            <h3>ShadowFormTwo</h3>
            <p>This element chain imports a css stylesheet.</p>
          </div>
        </shadow-form-two>
      </div>
      <div class="form-container">
        <shadow-form-three class="light-dom"></shadow-form-three>
      </div>
      <div class="form-container">
        <shadow-form-four>
          <div slot="description">
            <h3>ShadowFormFour</h3>
            <p>
              This element chain extends existing components, provides the
              static styles getter which returns its custom styles, and defines
              the custom element on the registry.
            </p>
          </div>
        </shadow-form-four>
      </div>
    `;
  }
}
customElements.define('styling-solutions-demo', StylingSolutionsDemo);
