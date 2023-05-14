import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _countOfInstaces = 0;
  private _energy: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);

    Ranger._countOfInstaces += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._countOfInstaces;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Ranger;