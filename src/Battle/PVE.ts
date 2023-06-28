import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemy: SimpleFighter[];

  constructor(player: Fighter, enemy: SimpleFighter[]) {
    super(player);
    this._enemy = enemy;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._enemy.length) {
      this._enemy.forEach((monster) => this.player.attack(monster));
      this._enemy = this._enemy.filter((enemy) => enemy.lifePoints > 0);
      if (this._enemy.length) {
        this._enemy.forEach((monster) => monster.attack(this.player));
      }
    }
    return super.fight();
  }
}