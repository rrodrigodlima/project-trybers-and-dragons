import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instancesCount: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    const dwarfCount = this._instancesCount
      ? (this._instancesCount += 1) : (this._instancesCount = 1);
    return dwarfCount;  
  }
}