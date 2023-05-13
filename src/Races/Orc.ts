import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _countOfInstaces = 0;

  constructor(name: string, dextery: number) {
    super(name, dextery);
    this._maxLifePoints = 74;
    Orc._countOfInstaces += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._countOfInstaces;
  }
}

export default Orc;