import { css } from 'lit-element';

export default css`
  .form-container {
    border: 2px dotted red;
  }

  .form-container + .form-container {
    margin-top: 12px;
  }

  h1,
  h3 {
    text-align: center;
  }

  shadow-button-one,
  shadow-button-two {
    background: orange;
    display: block;
    margin: 12px 0px;
  }

  shadow-input-one,
  shadow-input-two {
    background: rgb(190, 240, 99);
    display: block;
    margin: 12px 0px;
  }

  input {
    background: rgb(110, 230, 230);
  }

  label {
    background: yellow;
  }
`;
