// src/stores/gameStore.js
import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    currentLevel: 1,
    score: 0,
    progressToNextLevel: 0,
    levels: [
      { level: 1, requiredScore: 10, targetSpawnInterval: 2000 },
      { level: 2, requiredScore: 20, targetSpawnInterval: 1500 },
      { level: 3, requiredScore: 30, targetSpawnInterval: 1200 },
    ],
  }),
  getters: {
    currentLevelData: (state) => state.levels[state.currentLevel - 1],
    remainingPoints: (state) => {
      const requiredScore = state.levels[state.currentLevel - 1].requiredScore;
      return requiredScore - state.progressToNextLevel;
    },
  },
  actions: {
    incrementScore(points) {
      this.score += points;
      this.progressToNextLevel += points;
      if (this.progressToNextLevel >= this.currentLevelData.requiredScore) {
        this.nextLevel();
      }
    },
    nextLevel() {
      if (this.currentLevel < this.levels.length) {
        this.currentLevel++;
        this.progressToNextLevel = 0;
      } else {
        // Game completed scenario
      }
    },
    resetGame() {
      this.currentLevel = 1;
      this.score = 0;
      this.progressToNextLevel = 0;
    },
  },
});
