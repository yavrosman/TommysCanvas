// src/stores/gameStore.js
import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    currentLevel: 1,
    score: 0,
    progressToNextLevel: 0,
    levels: [
      { level: 1, requiredScore: 2, targetSpawnInterval: 4000, targetDuration: 3000, scene: 'desert.svg', size:100 },
      { level: 2, requiredScore: 20, targetSpawnInterval: 4000, targetDuration: 3000, scene: 'forest.svg', size:90 },
      { level: 3, requiredScore: 30, targetSpawnInterval: 3000, targetDuration: 2000, scene: 'ocean.svg', size:80 },
    ],
    targets: [],
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
        this.targets = [];
      } else {
        // Game completed scenario
      }
    },
    
    resetGame() {
      this.currentLevel = 1;
      this.score = 0;
      this.progressToNextLevel = 0;
    },

    removeExpiredTarget(index) {
      if (this.targets[index]) {
        this.targets.splice(index, 1);
      }
    },
  },
});
