<template>
    <canvas ref="canvas"></canvas>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';

const canvas = ref(null);

onMounted(() => {
    const ctx = canvas.value.getContext('2d');
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
});

</script>

<style scoped>
canvas {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
  