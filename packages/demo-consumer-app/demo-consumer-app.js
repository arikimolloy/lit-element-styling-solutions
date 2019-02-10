import { LitElement, html } from 'lit-element';
import './global-styles';
import '@arikimolloy/import-external-cssresult/shadow-form-one';
import '@arikimolloy/link-to-external-stylesheet/shadow-form-two';
import '@arikimolloy/render-to-light-dom/shadow-form-three';
import '@arikimolloy/global-styles-object/shadow-form-five';
import './extended-web-components/custom-styled-shadow-form-four';

export default class DemoConsumerApp extends LitElement {
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
            <p>
              This method forces the consumer to define a file in a specific
              location (their app's root directory) with a specific name
              (consumer-styles.js in this demo case).
            </p>
          </div>
        </shadow-form-one>
      </div>
      <div class="form-container">
        <shadow-form-two>
          <div slot="description">
            <h3>ShadowFormTwo</h3>
            <p>
              This element chain imports a css stylesheet.
            </p>
            <p>
              This method forces the consumer to define a stylesheet in a
              specific location (their app's root directory) with a specific
              name (consumer-styles.css in this demo case).
            </p>
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
            <p>
              This method forces your user to extend all your components they
              want to style and define them on the custom element registry.
            </p>
          </div>
        </shadow-form-four>
      </div>
      <div class="form-container">
        <shadow-form-five>
          <div slot="description">
            <h3>ShadowFormFive</h3>
            <p>
              This element chain imports a specific CSSResult from a global
              object on window and returns it in the corresponding static styles
              getter for each element.
            </p>
            <p>
              This method allows you to define default styles and allows the
              consumer to override the default styles as necessary.
            </p>
          </div>
        </shadow-form-five>
      </div>
    `;
  }
}
customElements.define('demo-consumer-app', DemoConsumerApp);
