### Extend the web component

You can extend a web component, override the static styles getter with your own imported styles, and define the custom element in the registry.

This method either requires that the component author does not define the element in the custom element registry, or the consumer defines the element in the registry with a different name (to avoid conflict).

The component author should define the component in the custom element registry except for a specific case where the component is depended on by another component in the library. In this case, the component must be given the correct name that the other component expects to use, and the other component must dynamically create the custom element (e.g via a factory) rather than import it directly (because the library doesn't know about the extended component that should be used instead).

**The good**:  
-Consumers have complete styling ability of your component.  
-Can provide default styles and consumers can easily override them.

**The bad**:  
-Consumers have to extend all of the components they want to style, which can end up being tedious and be difficult to manage at a large scale.  
-Can be fragile if the component is depended on by another component in the library. Consumers must be careful to define the extended component in the custom element registry with the correct name before it is created.

**When to use it**:  
-When you need to be able to complexly style a shadow tree and exposing enough CSS properties is not practical.  
-The component should define itself in the custom registry if it is publicly published, or if it is an independent component (i.e. other components do not import it). If the component is internal to your personal project or organization and another component imports it to be used in its DOM, then it may be appropriate for the component not to be defined in the registry and to allow consumers (e.g. projects in your org who consume this component) to define it in the registry themselves, allowing them to override the static styles getter and provide their own styles while still allowing the component to be imported by other components in the suite.

### Example

```css
// lit-element-styling-solutions/packages/styling-solutions/custom-styles.js
import { css } from 'lit-element';

export default css`
  /*
    These CSS rules will apply to shadow-form-four via importing this module and overriding the static styles getter.
  */

  .form-contents {
    padding: 4px;
    background: #0000ff;
    text-align: center;
  }

  div {
    background: red;
  }

  input {
    background: #2a2b32;
    color: #00ff00;
    font-size: 14px;
  }

  label {
    background: #eeeeee;
    color: #990033;
  }

  button {
    cursor: not-allowed;
    font-size: 16px;
  }
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

```js
// lit-element-styling-solutions/packages/styling-solutions/custom-styled-shadow-button-four.js
import ShadowButtonFour from '@arikimolloy/shadow-button/shadow-button-four';
import customStyles from './custom-styles';

export default class CustomStyledShadowButtonFour extends ShadowButtonFour {
  static get styles() {
    return [customStyles];
  }
}
customElements.define('shadow-button-four', CustomStyledShadowButtonFour);
```

```js
// lit-element-styling-solutions/packages/styling-solutions/custom-styled-shadow-form-four.js
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

// alternatively if the super component defines itself in the registry, you can define it with another name:
customElements.define(
  'custom-styled-shadow-form-four',
  CustomStyledShadowFormFour
);
```
