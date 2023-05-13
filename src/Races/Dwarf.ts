import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _countOfInstaces = 0;

  constructor(name: string, dextery: number) {
    super(name, dextery);
    this._maxLifePoints = 80;
    Dwarf._countOfInstaces += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._countOfInstaces;
  }
}

export default Dwarf;