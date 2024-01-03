export class Player {
  private _name: string;
  private _score: number;

  constructor(name: string) {
    this._name = name;
    this._score = 0;
  }

  get name() {
    return this._name;
  }

  get score() {
    return this._score;
  }

  set score(val: number) {
    this._score = val;
  }

  addToScore(val: number) {
    this._score += val;
  }

  subtractFromScore(val: number) {
    this._score -= val;
  }
}
