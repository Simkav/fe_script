class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(v) {
    if (typeof v !== "number") {
      throw new TypeError(`${v} not a number`);
    }
    this._from = v;
  }
  set to(v) {
    if (typeof v !== "number") {
      throw new TypeError(`${v} not a number`);
    }
    this._to = v;
  }
  get from() {
    return this._from;
  }
  get to() {
    return this._to;
  }
  get range() {
    return [this._from, this._to];
  }
  validate(num) {
    return num >= this._from && num <= this._to;
  }
}
