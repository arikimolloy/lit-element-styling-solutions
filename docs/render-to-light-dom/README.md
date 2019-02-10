### Render to the light DOM

You can render your web components to the light DOM instead of the shadow DOM.

This method removes the benefits of the shadow DOM (style and DOM encapsulation), but may be the simplest and easiest way to expose your components for external styling.

**The good**:  
-Consumers have complete styling ability of your component.  
-Can provide default styles and consumers can easily override them.

**The bad**:  
-Removes benefits of style and DOM encapsulation (can be very bad!).

**When to use it**:  
-When you need to be able to complexly style a shadow tree and exposing enough CSS properties is not practical. Within your own personal project or for internal use within your organization where you want to utilize reusable components but be able to style them with a completely different look-and-feel between projects.  
-This method should not be used in a publicly published component.

### Example

```css
// lit-element-styling-solutions/consumer-styles.css
/*
  These CSS rules will apply to shadow-form-three via light dom
*/

.light-dom > .form-contents {
  background: #fdf6e3;
  font-family: 'Lobster', cursive;
  font-size: 18px;
  text-align: center;
}

.light-dom > .form-contents h3 {
  color: #859900;
}

.light-dom > .form-contents p {
  color: #b58900;
}

.light-dom > .form-contents label {
  color: #dc322f;
  background-color: inherit;
}

.light-dom > .form-contents shadow-input-three {
  background-color: #eee8d5;
}

.light-dom > .form-contents input {
  background-color: #fdf6e3;
  margin-bottom: 14px;
}

.light-dom > .form-contents shadow-button-three {
  background: inherit;
}

.light-dom > .form-contents button {
  background-color: #93a1a1;
  display: block;
  margin: 0px auto;
  font-size: 18px;
  border-radius: 25px;
  cursor: pointer;
  font-family: inherit;
}
`;
```

```js
// lit-element-styling-solutions/packages/shadow-input/shadow-input-three.js
import { LitElement, html } from 'lit-element';

export default class ShadowInputThree extends LitElement {
  createRenderRoot() {
    return this; // render to the light DOM
  }

  render() {
    return html`
      <label for="input">My Label Three</label>
      <input id="input" placeholder="Enter a value" />
    `;
  }
}
customElements.define('shadow-input-three', ShadowInputThree);
```

```js
// lit-element-styling-solutions/packages/shadow-button/shadow-button-three.js
import { LitElement, html } from 'lit-element';

export default class ShadowButtonThree extends LitElement {
  createRenderRoot() {
    return this; // render to the light DOM
  }

  render() {
    return html`
      <button>ShadowButtonThree</button>
    `;
  }
}
customElements.define('shadow-button-three', ShadowButtonThree);
```

```js
// lit-element-styling-solutions/packages/shadow-form/shadow-form-three.js
import { LitElement, html } from 'lit-element';
import '@arikimolloy/shadow-input/shadow-input-three';
import '@arikimolloy/shadow-button/shadow-button-three';

export default class ShadowFormThree extends LitElement {
  createRenderRoot() {
    return this; // render to the light DOM
  }

  render() {
    return html`
      <div class="form-contents">
        <h3>ShadowFormThree</h3>
        <p>
          This element chain renders to the light DOM.
        </p>
        <p>
          This method loses shadow DOM benefits for the component, but allows
          complete external styling with ease.
        </p>
        <form>
          <shadow-input-three></shadow-input-three>
          <shadow-button-three></shadow-button-three>
        </form>
      </div>
    `;
  }
}
customElements.define('shadow-form-three', ShadowFormThree);
```
