import { create } from 'zustand';
import { createSelectors_hooks, createSelectors_vanilla } from './create-selectors';
import { DEFAULT_PLAYER_NAME, DEFAULT_SCORE_VALUES } from './constants';

export type Player = {
  name: string;
  score: number;
  show: boolean;
};

type GameState = {
  activeValue: number;
  scoreValues: number[];
  players: Player[];
  activePlayerCount: number;
  round: number; // 1 | 2 (Double Jeopardy) | 3 (Final Jeopardy)
};

type GameAction = {
  // Global actions
  setActiveValue: (value: number) => void;
  goToNextRound: () => void;
  goToLastRound: () => void;

  // Player actions
  setPlayerName: (id: number, name: string) => void;
  setPlayerScore: (id: number, score: number) => void;
  setPlayerShow: (id: number, show: boolean) => void;
  updatePlayerScoreOnCorrect: (id: number) => void;
  updatePlayerScoreOnIncorrect: (id: number) => void;
  addPlayer: () => void;
};

type GameStore = GameState & GameAction;

const useGameStoreBase = create<GameStore>()(set => ({
  activeValue: 0,
  scoreValues: DEFAULT_SCORE_VALUES,
  players: [
    {
      name: DEFAULT_PLAYER_NAME,
      score: 0,
      show: true,
    },
    {
      name: DEFAULT_PLAYER_NAME,
      score: 0,
      show: false,
    },
    {
      name: DEFAULT_PLAYER_NAME,
      score: 0,
      show: false,
    },
  ],
  activePlayerCount: 1,
  round: 1,
  setActiveValue: (value: number) => set({ activeValue: value }),
  goToNextRound: () => set(state => ({ round: state.round < 3 ? state.round + 1 : state.round })),
  goToLastRound: () => set(state => ({ round: state.round > 1 ? state.round - 1 : state.round })),
  setPlayerName: (id: number, name: string) =>
    set(state => ({
      players: { ...state.players, [id]: { ...state.players[id], name } },
    })),
  setPlayerScore: (id: number, score: number) =>
    set(state => ({
      players: { ...state.players, [id]: { ...state.players[id], score } },
    })),
  setPlayerShow: (id: number, show: boolean) =>
    set(state => ({
      players: { ...state.players, [id]: { ...state.players[id], show } },
    })),
  updatePlayerScoreOnCorrect: (id: number) =>
    set(state => ({
      players: {
        ...state.players,
        [id]: { ...state.players[id], score: state.players[id].score + state.activeValue },
      },
    })),
  updatePlayerScoreOnIncorrect: (id: number) =>
    set(state => ({
      players: {
        ...state.players,
        [id]: { ...state.players[id], score: state.players[id].score - state.activeValue },
      },
    })),
  addPlayer: () =>
    set(state => ({
      players: {
        ...state.players,
        [state.activePlayerCount]: { ...state.players[state.activePlayerCount], show: true },
      },
      activePlayerCount:
        state.activePlayerCount < 3 ? state.activePlayerCount + 1 : state.activePlayerCount,
    })),
}));

export const useGameStore = createSelectors_hooks(useGameStoreBase);
// export const gameStore = createSelectors_vanilla(useGameStoreBase);
