import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _instancesCount: number;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    const warriorCount = this._instancesCount
      ? (this._instancesCount += 1)
      : (this._instancesCount = 1);
    return warriorCount;
  }
}