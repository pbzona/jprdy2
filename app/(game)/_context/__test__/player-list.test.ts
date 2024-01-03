import { PlayerList } from "../player-list";

it("should properly instantiate a new player list", () => {
  const playerList = new PlayerList();
  expect(playerList).toBeInstanceOf(PlayerList);
});
