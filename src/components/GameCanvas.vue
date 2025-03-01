<template>
  <House ref="houseRef" style="position: absolute; top: 40px; left: 0; z-index: 2;" />
  <img ref="backgroundRef" :src="sceneUrl" class="bg"/>
  <Target
    v-for="(target, index) in gameStore.targets"
    :key="index"
    :class="{ hit: target.isHit }"
    :style="{ top: target.position.y + '%', left: target.position.x + '%'}"
    @click="handleTargetHit(index)"
  />
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted, computed } from 'vue';
import { useGameStore } from '../stores/gameStore';
import Target from '../components/Target.vue';
import House from '../components/ui/House.vue';
import { calculateTargetMovement, applyTargetMovement } from '../scripts/target';

const gameStore = useGameStore();
let targetInterval = null;

const houseRef = ref(null);
const backgroundRef = ref(null);

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
  const target = gameStore.targets[index];
  target.isHit = true;

  const movement = calculateTargetMovement(houseRef, backgroundRef, index);
  if (!movement) return;
  const duration = applyTargetMovement(target, movement);
  
  gameStore.incrementScore(1);
  setTimeout(() => {
    gameStore.targets.splice(index, 1);
  }, duration * 1000);
};

const setupLevel = () => {
  if (targetInterval) clearInterval(targetInterval);
  gameStore.targets = [];

  spawnTarget();

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
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
}
.target {
  position: absolute;
  transition: transform var(--transition-duration, 0.5s) linear, top var(--transition-duration, 0.5s) linear, left var(--transition-duration, 0.5s) linear;
}
.target.hit {
  transform: rotate(360deg) scale(0);
}
</style>
