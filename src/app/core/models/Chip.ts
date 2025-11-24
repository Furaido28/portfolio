export class Chip {
  constructor(
    private _textValue: string,
    private _type?: 'standard' | 'skill' | 'contact' | 'action',
    private _icon?: string,
    private _url?: string
  ) {}

  get textValue() {
    return this._textValue;
  }

  get type() {
    return this._type || 'standard';
  }

  get icon() {
    return this._icon;
  }

  get url() {
    return this._url;
  }
}
