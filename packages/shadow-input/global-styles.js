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
