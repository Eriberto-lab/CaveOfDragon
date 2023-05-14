import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _countOfInstaces = 0;
  private _energy: EnergyType = 'mana';

  constructor(name: string) {
    super(name);

    Mage._countOfInstaces += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._countOfInstaces;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Mage;