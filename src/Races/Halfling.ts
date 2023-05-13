import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _countOfInstaces = 0;

  constructor(name: string, dextery: number) {
    super(name, dextery);
    this._maxLifePoints = 60;
    Halfling._countOfInstaces += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._countOfInstaces;
  }
}

export default Halfling;