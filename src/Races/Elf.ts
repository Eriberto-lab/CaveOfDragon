import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _countOfInstaces = 0;

  constructor(name: string, dextery: number) {
    super(name, dextery);
    this._maxLifePoints = 99;
    Elf._countOfInstaces += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._countOfInstaces;
  }
}

export default Elf;