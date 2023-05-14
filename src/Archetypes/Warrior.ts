import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _countOfInstaces = 0;
  private _energy: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);

    Warrior._countOfInstaces += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._countOfInstaces;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Warrior;