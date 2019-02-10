import ShadowButtonFour from '@arikimolloy/extend-web-component/shadow-button-four';
import customStyles from './custom-styles';

export default class CustomStyledShadowButtonFour extends ShadowButtonFour {
  static get styles() {
    return [customStyles];
  }
}
customElements.define('shadow-button-four', CustomStyledShadowButtonFour);
