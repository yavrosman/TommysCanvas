<template>
  <div class="game-container">
    <GameCanvas />
  </div>
</template>

<script setup>
import GameCanvas from './components/GameCanvas.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Ensure no overflow */
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

.game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

/* Ensure GameCanvas fills the container */
.game-container > * {
  width: 100%;
  height: 100%;
}
</style>
