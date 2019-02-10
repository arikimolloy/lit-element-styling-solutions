### Link to an external stylesheet in your web component

Your element can import an externally-defined stylesheet with a relative path in your html literal.

This method forces the consumer to define a file in a specific location (likely their app's root directory) with a specific name (consumer-styles.css in this demo case).

**The good**:  
-Consumers can completely style the internals of your shadow DOM  
-Can import the same stylesheet in multiple files so consumer just needs to define one file. Can also be a negative if the file becomes too much to maintain easily.  
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
/* lit-element-styling-solutions/consumer-styles.css */
/*
  These CSS rules will apply to shadow-form-two via importing style sheet in shadow dom
*/

.form-contents {
  background: #3e3e3e;
  color: #eeeeee;
  padding: 4px;
  text-align: center;
}

shadow-form-two h3 {
  color: #fd6363;
}

label {
  color: #fd6363;
}

input {
  background: #eeeeee;
  margin-bottom: 14px;
}

button {
  display: block;
  margin: 0px auto;
  cursor: crosshair;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
}

shadow-input-two,
shadow-button-two {
  background: #494949;
}
`;

```

```js
// lit-element-styling-solutions/packages/shadow-input/shadow-input-two.js
import { LitElement, html } from 'lit-element';

export default class ShadowInputTwo extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="consumer-styles.css" />
      <label for="input">My Label Two</label>
      <input id="input" placeholder="Enter a value" />
    `;
  }
}
customElements.define('shadow-input-two', ShadowInputTwo);
```

```js
// lit-element-styling-solutions/packages/shadow-button/shadow-button-two.js
import { LitElement, html } from 'lit-element';

export default class ShadowButtonTwo extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="consumer-styles.css" />
      <button>ShadowButtonTwo</button>
    `;
  }
}
customElements.define('shadow-button-two', ShadowButtonTwo);
```

```js
// lit-element-styling-solutions/packages/shadow-form/shadow-form-two.js
import { LitElement, html } from 'lit-element';
import '@arikimolloy/shadow-input/shadow-input-two';
import '@arikimolloy/shadow-button/shadow-button-two';

export default class ShadowFormTwo extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="consumer-styles.css" />
      <div class="form-contents">
        <slot name="description"></slot>
        <form>
          <shadow-input-two></shadow-input-two>
          <shadow-button-two></shadow-button-two>
        </form>
      </div>
    `;
  }
}
customElements.define('shadow-form-two', ShadowFormTwo);
```
