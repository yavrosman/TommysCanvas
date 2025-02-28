<template>
  <GameCanvas />
</template>

<script setup>
import GameCanvas from './components/GameCanvas.vue';
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

</style>