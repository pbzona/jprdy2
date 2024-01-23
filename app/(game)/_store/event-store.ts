import { create } from 'zustand';
import { createSelectors_hooks } from './create-selectors';

type EventState = {
  gameHasStarted: boolean;
};

type EventAction = {
  startGame: () => void;
};

type EventStore = EventState & EventAction;

const useEventStoreBase = create<EventStore>()(set => ({
  gameHasStarted: false,
  startGame: () => set({ gameHasStarted: true }),
}));

export const useEventStore = createSelectors_hooks(useEventStoreBase);
