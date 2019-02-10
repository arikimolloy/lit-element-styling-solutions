import { LitElement, html } from 'lit-element';
import './shadow-input-four';
import './shadow-button-four';
import ShadowFormFactory from './shadow-form-factory';

export default class ShadowFormFour extends LitElement {
  static properties() {
    return {
      formFactory: { type: Object }
    };
  }

  constructor() {
    super();
    this.formFactory = new ShadowFormFactory();
  }

  render() {
    const inputEle = this.formFactory.getFunc('input');
    const buttonEle = this.formFactory.getFunc('button');
    return html`
      <div class="form-contents">
        <slot name="description"></slot>
        <form>
          ${this.appendChild(inputEle())} ${this.appendChild(buttonEle())}
        </form>
      </div>
    `;
  }
}
