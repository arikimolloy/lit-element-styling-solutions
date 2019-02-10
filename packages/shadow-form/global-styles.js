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
