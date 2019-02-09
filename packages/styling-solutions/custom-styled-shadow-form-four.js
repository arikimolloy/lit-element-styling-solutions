import ShadowFormFour from '../shadow-form/shadow-form-four';
import './custom-styled-shadow-input-four';
import './custom-styled-shadow-button-four';
import customStyles from './custom-styles';

export default class CustomStyledShadowFormFour extends ShadowFormFour {
  static get styles() {
    return [customStyles];
  }
}
customElements.define('shadow-form-four', CustomStyledShadowFormFour);
