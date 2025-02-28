<template>
  <div class="level-display">
    <p class="level">Level: {{ gameStore.currentLevel }}</p>
    <p class="score">Score: {{ gameStore.score }}</p>
    <p class="next-level">Next Level In: {{ remainingPoints }} points</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useGameStore } from '../stores/gameStore';

const gameStore = useGameStore();

const remainingPoints = computed(() => {
  const requiredScore = gameStore.requiredScorePerLevel[gameStore.currentLevel - 1];
  return requiredScore - gameStore.progressToNextLevel;
});
</script>

<style scoped>
.level-display {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 25px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #ffcc00;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  z-index: 1000;
}

.level-display p {
  margin: 5px 0;
  font-size: 1.2rem;
  color: #333;
}

.level-display .level {
  font-weight: bold;
  color: #ff6600;
}

.level-display .score {
  font-weight: bold;
  color: #0066ff;
}

.level-display .next-level {
  font-weight: bold;
  color: #009933;
}
</style>
