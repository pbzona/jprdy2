import { Game } from "../game";

it("should properly instantiate a new game", () => {
  const game = new Game();

  expect(game).toBeInstanceOf(Game);
});
