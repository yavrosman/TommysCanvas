// src/stores/gameStore.js
import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    currentLevel: 1,
    score: 0,
    progressToNextLevel: 0,
    requiredScorePerLevel: [10, 20, 30],
  }),
  actions: {
    incrementScore(points) {
      this.score += points;
      this.progressToNextLevel += points;
      if (this.progressToNextLevel >= this.requiredScorePerLevel[this.currentLevel - 1]) {
        this.nextLevel();
      }
    },
    nextLevel() {
      this.currentLevel++;
      this.progressToNextLevel = 0;
    },
    resetGame() {
      this.currentLevel = 1;
      this.score = 0;
      this.progressToNextLevel = 0;
    },
  },
});
