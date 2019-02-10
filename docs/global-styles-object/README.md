### Global styles object

Your web component can define a set of default global styles to import, which a consumer can override in order to customize styling.

**The good**:  
-Consumers have complete styling ability of your component.  
-Can provide default styles and consumers can easily override them.

**The bad**:  
-It requires a global object.  
-Consumers must be sure to override the styles before they are imported and to set the correct properties on the correct global object.  
-Can become tedious, hard to maintain, and hard to manage at scale.

**When to use it**:  
-When you need to be able to complexly style a shadow tree and exposing enough CSS properties is not practical.

### Example

```css
// lit-element-styling-solutions/packages/shadow-input/global-styles.js
import { css } from 'lit-element';

window.GlobalShadowStyles = window.GlobalShadowStyles || {};
window.GlobalShadowStyles['shadow-input-five'] =
  window.GlobalShadowStyles['shadow-input-five'] ||
  css`
    /*
      Default styles
    */
    label {
      background: orange;
      color: black;
      font-weight: bold;
    }

    input {
      font-size: 20px;
      font-family: fantasy;
    }
  `;

`;

```

```js
// lit-element-styling-solutions/packages/styling-solutions/custom-styled-shadow-input-four.js
import ShadowInputFour from '@arikimolloy/shadow-input/shadow-input-four';
import customStyles from './custom-styles';

export default class CustomStyledShadowInputFour extends ShadowInputFour {
  static get styles() {
    return [customStyles];
  }
}
customElements.define('shadow-input-four', CustomStyledShadowInputFour);
```

```css
// lit-element-styling-solutions/packages/shadow-button/global-styles.js
import { css } from 'lit-element';

window.GlobalShadowStyles = window.GlobalShadowStyles || {};
window.GlobalShadowStyles['shadow-button-five'] =
  window.GlobalShadowStyles['shadow-button-five'] ||
  css`
    /*
      Default styles
    */
    button {
      font-size: 20px;
      font-family: 'Courier New', Courier, monospace;
    }
  `;
```

```js
// lit-element-styling-solutions/packages/shadow-button/shadow-button-five.js
import { LitElement, html } from 'lit-element';
import './global-styles';

export default class ShadowButtonFive extends LitElement {
  static get styles() {
    return [window.GlobalShadowStyles['shadow-button-five']];
  }

  render() {
    return html`
      <button>ShadowButtonFive</button>
    `;
  }
}
customElements.define('shadow-button-five', ShadowButtonFive);
```

```css
// lit-element-styling-solutions/packages/shadow-form/global-styles.js
import { css } from 'lit-element';

window.GlobalShadowStyles = window.GlobalShadowStyles || {};
window.GlobalShadowStyles['shadow-form-five'] =
  window.GlobalShadowStyles['shadow-form-five'] ||
  css`
    /*
      Default styles
    */

    .form-contents {
      background: green;
      padding: 4px;
      text-align: center;
    }

    label {
      background: red;
      color: #813772;
      display: block;
      width: 140px;
      margin: 4px auto 0px auto;
      font-size: 20px;
    }

    input {
      background: blue;
      color: #7b2d26;
      display: block;
      margin: 0px auto;
      font-size: 20px;
      margin-bottom: 14px;
    }

    button {
      background: black;
      display: block;
      margin: 0px auto;
      border-radius: 40px;
      font-size: 16px;
      cursor: pointer;
    }
  `;

```

```js
// lit-element-styling-solutions/packages/shadow-form/shadow-form-five.js
import { LitElement, html } from 'lit-element';
import '@arikimolloy/shadow-input/shadow-input-five';
import '@arikimolloy/shadow-button/shadow-button-five';
import './global-styles';

export default class ShadowFormFive extends LitElement {
  static get styles() {
    return [window.GlobalShadowStyles['shadow-form-five']];
  }

  render() {
    return html`
      <div class="form-contents">
        <slot name="description"></slot>
        <form>
          <shadow-input-five></shadow-input-five>
          <shadow-button-five></shadow-button-five>
        </form>
      </div>
    `;
  }
}
customElements.define('shadow-form-five', ShadowFormFive);
```
