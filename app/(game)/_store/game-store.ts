import { create } from 'zustand';
import { createSelectors_hooks, createSelectors_vanilla } from './create-selectors';
import { DEFAULT_PLAYER_NAME, DEFAULT_SCORE_VALUES } from './constants';

type Player = {
  name: string;
  score: number;
};

type GameState = {
  activeValue: number;
  scoreValues: number[];
  players: Record<string, Player>;
};

type GameAction = {
  // Global actions
  setActiveValue: (value: number) => void;

  // Player actions
  setPlayerName: (id: string, name: string) => void;
  setPlayerScore: (id: string, score: number) => void;
  updatePlayerScoreOnCorrect: (id: string) => void;
  updatePlayerScoreOnIncorrect: (id: string) => void;
};

type GameStore = GameState & GameAction;

const useGameStoreBase = create<GameStore>()(set => ({
  activeValue: 0,
  scoreValues: DEFAULT_SCORE_VALUES,
  players: {
    0: {
      name: DEFAULT_PLAYER_NAME,
      score: 0,
    },
    1: {
      name: DEFAULT_PLAYER_NAME,
      score: 0,
    },
    2: {
      name: DEFAULT_PLAYER_NAME,
      score: 0,
    },
  },
  setActiveValue: (value: number) => set({ activeValue: value }),
  setPlayerName: (id: string, name: string) =>
    set(state => ({
      players: { ...state.players, [id]: { ...state.players[id], name } },
    })),
  setPlayerScore: (id: string, score: number) =>
    set(state => ({
      players: { ...state.players, [id]: { ...state.players[id], score } },
    })),
  updatePlayerScoreOnCorrect: (id: string) =>
    set(state => ({
      players: {
        ...state.players,
        [id]: { ...state.players[id], score: state.players[id].score + state.activeValue },
      },
    })),
  updatePlayerScoreOnIncorrect: (id: string) =>
    set(state => ({
      players: {
        ...state.players,
        [id]: { ...state.players[id], score: state.players[id].score - state.activeValue },
      },
    })),
}));

export const useGameStore = createSelectors_hooks(useGameStoreBase);
export const gameStore = createSelectors_vanilla(useGameStoreBase);
