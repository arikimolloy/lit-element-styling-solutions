import { css } from 'lit-element';

export default css`
  /*
    These CSS rules will apply to shadow-form-one via importing this module
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
