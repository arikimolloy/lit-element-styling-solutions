### Import External CSSResult

Your element can import externally-defined css literals with a relative path and return them in the LitElement static styles getter.

This method forces the consumer to define a file in a specific location (likely their app's root directory) with a specific name (consumer-styles.js in this demo case).

**The good**:  
-Consumers can completely style the internals of your shadow DOM  
-Can import the same CSSResult in multiple files so consumer just needs to define one file. Can also be a negative if the file becomes too much to maintain easily.  
-Can provide default styles and consumers can easily override them.

**The bad**:  
-This is a fragile and hacky solution to get around shadow DOM encapsulation  
-Forces consumers to do something that the component author defines (file location/name)
-Hard to maintain and work with

**When to use it**:  
-When you need to be able to complexly style a shadow tree and exposing enough CSS properties is not practical. Within your own personal project or for internal use within your organization.  
-This method should not be used in a publicly published component.

### Example

```css
// lit-element-styling-solutions/consumer-styles.js
import { css } from 'lit-element';

export default css`
  /*
    These CSS rules will apply to shadow-button-one/shadow-input-one/shadow-form-one via importing this module
  */

  .form-contents {
    background: #7b2d26;
    padding: 4px;
    text-align: center;
  }

  label {
    background: #0b7a75;
    color: #aba194;
    display: block;
    width: 140px;
    margin: 4px auto 0px auto;
    font-size: 20px;
  }

  input {
    background: #aba194;
    color: #7b2d26;
    display: block;
    margin: 0px auto;
    font-size: 20px;
    margin-bottom: 14px;
  }

  button {
    background: #5f62ac;
    display: block;
    margin: 0px auto;
    border-radius: 40px;
    font-size: 16px;
    cursor: pointer;
  }
`;

```

```js
// lit-element-styling-solutions/packages/shadow-input/shadow-input-one.js
import { LitElement, html } from 'lit-element';
import consumerStyles from '../../consumer-styles';

export default class ShadowInputOne extends LitElement {
  static get styles() {
    return [consumerStyles];
  }

  render() {
    return html`
      <label for="input">My Label One</label>
      <input id="input" placeholder="Enter a value" />
    `;
  }
}
customElements.define('shadow-input-one', ShadowInputOne);
```

```js
// lit-element-styling-solutions/packages/shadow-button/shadow-button-one.js
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
```

```js
// lit-element-styling-solutions/packages/shadow-form/shadow-form-one.js
import { LitElement, html } from 'lit-element';
import '@arikimolloy/shadow-input/shadow-input-one';
import '@arikimolloy/shadow-button/shadow-button-one';
import consumerStyles from '../../consumer-styles.js';

export default class ShadowFormOne extends LitElement {
  static get styles() {
    return [consumerStyles];
  }

  render() {
    return html`
      <div class="form-contents">
        <slot name="description"></slot>
        <form>
          <shadow-input-one></shadow-input-one>
          <shadow-button-one></shadow-button-one>
        </form>
      </div>
    `;
  }
}
customElements.define('shadow-form-one', ShadowFormOne);
```
