import ShadowInputFour from '@arikimolloy/extend-web-component/shadow-input-four';
import customStyles from './custom-styles';

export default class CustomStyledShadowInputFour extends ShadowInputFour {
  static get styles() {
    return [customStyles];
  }
}
customElements.define('shadow-input-four', CustomStyledShadowInputFour);
