<template>
  <div :class="['target', `size-${currentLevelSize}`]"></div>
</template>
  
<script setup>
import { computed } from 'vue';
import { useGameStore } from '../stores/gameStore';

const gameStore = useGameStore();
const currentLevelSize = computed(() => gameStore.currentLevelData.size);
</script>
  
<style scoped>
.target {
  position: relative;
  background-color: white;
  border-radius: 50%;
  animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), glow 1.5s infinite alternate;
}

.size-100 {
  width: 100px;
  height: 100px;
}

.size-90 {
  width: 90px;
  height: 90px;
}

.size-80 {
  width: 80px;
  height: 80px;
}

@keyframes pop-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  80% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 1);
  }
}
</style>
