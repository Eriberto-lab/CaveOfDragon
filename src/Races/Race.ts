class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  getName(): string {
    return this._name;
  }

  getDexterity(): number {
    return this._dexterity;
  }
}

export default {
  Race,
};