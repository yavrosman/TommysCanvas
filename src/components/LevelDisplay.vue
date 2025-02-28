<template>
  <div class="level-display">
    <div class="info">
      <span class="level">Level: {{ gameStore.currentLevel }}</span>
      <span class="score">Score: {{ gameStore.score }}</span>
      <span class="next-level">Next: {{ remainingPoints }}</span>
    </div>
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
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6); /* Light opacity */
  backdrop-filter: blur(5px);
  padding: 8px 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Comic Sans MS', cursive, sans-serif;
  z-index: 1000;
}

.info {
  display: flex;
  justify-content: space-around;
  width: 90%;
  max-width: 500px;
}

.info span {
  font-size: 1rem;
  font-weight: bold;
}

.level {
  color: #ff6600;
}

.score {
  color: #0099ff;
}

.next-level {
  color: #33cc33;
}
</style>
