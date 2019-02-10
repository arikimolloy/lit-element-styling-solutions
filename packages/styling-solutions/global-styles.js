import { css } from 'lit-element';

window.GlobalShadowStyles = css`
  /*
    These CSS rules will apply to shadow-form-five via reference to object on window
  */

  .form-contents {
    background: #000000;
    padding: 4px;
    text-align: center;
  }

  label {
    background: #062f4f;
    color: #813772;
    display: block;
    width: 140px;
    margin: 4px auto 0px auto;
    font-size: 20px;
  }

  input {
    background: #062f4f;
    color: #7b2d26;
    display: block;
    margin: 0px auto;
    font-size: 20px;
    margin-bottom: 14px;
  }

  button {
    background: #b82601;
    display: block;
    margin: 0px auto;
    border-radius: 40px;
    font-size: 16px;
    cursor: pointer;
  }
`;
