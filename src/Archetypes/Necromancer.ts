import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _countOfInstaces = 0;
  private _energy: EnergyType = 'mana';

  constructor(name: string) {
    super(name);

    Necromancer._countOfInstaces += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._countOfInstaces;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Necromancer;