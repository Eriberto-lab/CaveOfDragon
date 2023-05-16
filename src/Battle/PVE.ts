import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: SimpleFighter[];
  private _Alive: boolean;

  constructor(player: Fighter, moster: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monsters = moster;
    this._Alive = true;
  }

  private horde() {
    // primeiro if verifica se ainda existem mostros, caso verdadeiro iremos verificar os lifepoints se for menor que 0 retiramos da orda de mostros
    if (this._monsters.length > 0) {
      if (this._monsters[0].lifePoints < 0) {
        this._monsters.shift();
      } // caso a vida do primeiro mostro chegue a menos de zero, ele é retirado da horda
    } else this._Alive = false; // caso não entre em nhum if, setamos a propriedade Alive para false e encerramos as lutas

    return this._monsters[0];
  }

  private levelUp() {
    if (this._player.lifePoints > 0) this.player.levelUp();
  }

  fight(): number {
    while (this._player.lifePoints > 0 && this._Alive) {
      let moster = this._monsters[0];
      const randomInt = getRandomInt(0, this._monsters.length);
      if (this._monsters.length > 0) {
        this._player.attack(moster); 
        this._monsters[0].attack(this._player); // os mostros tem duas chances de attack por rodada
        this._monsters[randomInt].attack(this._player);
      }
      
      moster = this.horde(); // apos finalizar a rodada o metodo é novamente rodado 
    }
    this.levelUp();
    return super.fight(); // caso as condições do while não seja verdadeira a luta finaliza com o resultado de super.fight
  }
}

export default PVE;