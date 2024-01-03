import { Player } from "../player";

it("should properly instantiate a new player", () => {
  const playerName = "example";

  const player = new Player(playerName);

  expect(player).toBeInstanceOf(Player);
  expect(player.name).toBe(playerName);
  expect(player.score).toBe(0);
});

describe("score change methods", () => {
  it("should correctly add value to player score", () => {
    const player = new Player("example");
    expect(player.score).toBe(0);

    player.addToScore(100);
    expect(player.score).toBe(100);
  });

  it("should correctly subtract value from player score", () => {
    const player = new Player("example");
    expect(player.score).toBe(0);

    player.subtractFromScore(100);
    expect(player.score).toBe(-100);
  });
});
