import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player2 = player2;
  }

  public fight(): number {
    while (this.player.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player.attack(this.player2);
      if (this.player2.lifePoints > 0) this.player2.attack(this.player);
    }
    return this.player.lifePoints > 0 ? 1 : -1;
  }
}