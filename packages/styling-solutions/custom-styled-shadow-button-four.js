import ShadowButtonFour from '@arikimolloy/shadow-button/shadow-button-four';
import customStyles from './custom-styles';

export default class CustomStyledShadowButtonFour extends ShadowButtonFour {
  static get styles() {
    return [customStyles];
  }
}
customElements.define('shadow-button-four', CustomStyledShadowButtonFour);
