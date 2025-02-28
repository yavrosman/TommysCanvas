<template>
  <House style="position: absolute; top: 40px; left: 0;" />
  <canvas ref="canvas" :style="{ backgroundImage: `url(${sceneUrl})` }"></canvas>
  <Target
    v-for="(target, index) in gameStore.targets"
    :key="index"
    :style="{ top: target.position.y + '%', left: target.position.x + '%' }"
    @click="handleTargetHit(index)"
  />
</template>
  
<script setup>
import { ref, onMounted, watch, onUnmounted, computed } from 'vue';
import { useGameStore } from '../stores/gameStore';
import Target from '../components/Target.vue';
import House from '../components/ui/House.vue';

const gameStore = useGameStore();
let targetInterval = null;

const sceneUrl = computed(() => {
  const url = new URL(`../assets/scenes/${gameStore.currentLevelData.scene}`, import.meta.url).href;
  return url;
});

const spawnTarget = () => {
  const x = Math.random() * 90;
  const y = Math.random() * 90;
  const index = gameStore.targets.length;
  gameStore.targets.push({ position: { x, y } });

  setTimeout(() => {
    gameStore.removeExpiredTarget(index);
  }, gameStore.currentLevelData.targetDuration);
};

const handleTargetHit = (index) => {
  gameStore.targets.splice(index, 1);
  gameStore.incrementScore(1);
};

const setupLevel = () => {
  if (targetInterval) clearInterval(targetInterval);
  gameStore.targets = [];

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
  background-size: cover;
  background-position: center;
}
.target {
  position: absolute;
}
</style>
