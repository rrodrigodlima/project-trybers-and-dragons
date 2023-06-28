import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instancesCount: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    const halflingCount = this._instancesCount
      ? (this._instancesCount += 1) : (this._instancesCount = 1);
    return halflingCount;  
  }
}