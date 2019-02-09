export default class ShadowFormFactory {
  constructor() {
    this._funcMap = {
      input: this._getInputEle,
      button: this._getButtonEle
    };
  }

  addFactoryFunc(name, func) {
    this._funcMap[name] = func;
  }

  getFunc(name) {
    return this._funcMap[name];
  }

  _getInputEle() {
    return document.createElement('shadow-input-four');
  }

  _getButtonEle() {
    return document.createElement('shadow-button-four');
  }
}
