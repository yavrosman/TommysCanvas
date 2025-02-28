<template>
    <div class="level-display">
      <p>Level: {{ gameStore.currentLevel }}</p>
      <p>Score: {{ gameStore.score }}</p>
      <p>Next Level In: {{ remainingPoints }} points</p>
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
    padding: 10px;
    background-color: #f0f4f8;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .level-display p {
    margin: 5px 0;
    font-size: 1.2rem;
    color: #333;
  }
  </style>
  