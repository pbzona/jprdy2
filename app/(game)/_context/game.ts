export class Game {
  private _activeValue: number;

  constructor() {
    this._activeValue = 0;
  }

  get activeValue() {
    return this._activeValue;
  }

  set activeValue(val: number) {
    console.log('set to', val);
    this._activeValue = val;
  }
}
