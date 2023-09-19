import { defineStore } from 'pinia';

export const useGeneralStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    envVariables: {},
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    getEnvVariables: (state) => state.envVariables,
  },
  actions: {
    increment() {
      this.counter += 1;

      return this;
    },
    setEnvVariables() {
      this.envVariables = process.env;

      return this;
    },
  },
});
