<template>
    <div class="game-view">
      <LevelDisplay />
      <GameCanvas />
    </div>
  </template>
  
  <script setup>
  import GameCanvas from '../components/GameCanvas.vue';
  import LevelDisplay from '../components/LevelDisplay.vue';
  </script>
  
  <style scoped>
  .game-view {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #e8f0fe;
    overflow: hidden;
  }
  
  /* LevelDisplay styling */
  .game-view > :first-child {
    flex: 0 0 auto;
  }
  
  /* GameCanvas styling */
  .game-view > :last-child {
    flex: 1;
    overflow: hidden;
  }
  </style>