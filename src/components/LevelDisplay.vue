<template>
  <div class="level-display">
    <div class="info">
      <div class="box level-box">
        <span class="level">Level: {{ gameStore.currentLevel }}</span>
      </div>
      <div class="box score-box">
        <span class="score">Score: {{ gameStore.score }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/gameStore';

const gameStore = useGameStore();

</script>

<style scoped>
.level-display {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  z-index: 1000;
  padding: 5px;
}

.info {
  display: flex;
  justify-content: space-between;
  width: 100%;
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

.box {
  padding: 5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
}

.level-box {
  background-color: #ffe6cc;
  border: 2px solid #ff6600;
}

.score-box {
  background-color: #cce6ff;
  border: 2px solid #0099ff;
}
</style>
