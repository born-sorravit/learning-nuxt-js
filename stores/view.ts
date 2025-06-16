import { defineStore } from "pinia";

export const useViewStore = defineStore("view", {
  state: () => ({
    view: 0,
  }),

  actions: {
    incrementView() {
      this.view++;
    },
    resetView() {
      this.view = 0;
    },
  },
});
