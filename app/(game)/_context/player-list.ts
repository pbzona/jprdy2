import { Player } from "./player";

export class PlayerList extends Map<string, Player> {
  addPlayer(name: string) {
    if (this.has(name)) {
      throw new Error("Player with that name already exists");
    }

    if (this.size >= 3) {
      throw new Error("Cannot add more than 3 players");
    }

    this.set(name, new Player(name));
  }

  getPlayer(name: string) {
    return this.get(name);
  }
}
