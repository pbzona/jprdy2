import { Player } from './player';

export class PlayerList extends Map<string, Player> {
  constructor() {
    super();
  }

  addPlayer(name: string) {
    if (this.has(name)) {
      throw new Error('Player with that name already exists');
    }

    this.set(name, new Player(name));
  }

  getPlayer(name: string) {
    return this.get(name);
  }
}
