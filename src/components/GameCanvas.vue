<template>
    <canvas ref="canvas"></canvas>
</template>
  
<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { useGameStore } from '../stores/gameStore';
import Target from '../components/Target.vue';

const gameStore = useGameStore();
const targets = ref([]);
let targetInterval = null;

const spawnTarget = () => {
  const x = Math.random() * 90;
  const y = Math.random() * 90;
  targets.value.push({ position: { x, y } });
};

const handleTargetHit = (index) => {
  targets.value.splice(index, 1);
  gameStore.incrementScore(1);
};

const setupLevel = () => {
  if (targetInterval) clearInterval(targetInterval);
  targets.value = [];

  spawnTarget(); // initial target spawn

  targetInterval = setInterval(
    spawnTarget,
    gameStore.currentLevelData.targetSpawnInterval
  );
};

onMounted(setupLevel);

// Update the scene whenever the level changes
watch(() => gameStore.currentLevel, setupLevel);

// Clear interval on component unmount
onUnmounted(() => clearInterval(targetInterval));
</script>


<style scoped>
canvas {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
  