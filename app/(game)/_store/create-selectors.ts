import { StoreApi, UseBoundStore, useStore } from 'zustand';

// See: https://docs.pmnd.rs/zustand/guides/auto-generating-selectors

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

// Creates selectors for use in React
export const createSelectors_hooks = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    // biome-ignore lint/suspicious/noExplicitAny:
    (store.use as any)[k] = () => store(s => s[k as keyof typeof s]);
  }

  return store;
};

// Creates selectors for use in JS/TS
export const createSelectors_vanilla = <S extends StoreApi<object>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    // biome-ignore lint/suspicious/noExplicitAny:
    (store.use as any)[k] = () => useStore(_store, s => s[k as keyof typeof s]); // eslint-disable-line react-hooks/rules-of-hooks
  }

  return store;
};
