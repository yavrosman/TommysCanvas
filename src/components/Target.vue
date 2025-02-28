<template>
    <div
      class="target"
      :style="targetStyle"
      @click.stop="hitTarget"
    ></div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    position: {
      type: Object,
      required: true,
    },
  });
  
  const emit = defineEmits(['hit']);
  
  const hitTarget = () => {
    emit('hit');
  };
  
  const targetStyle = computed(() => ({
    position: 'absolute',
    top: `${props.position.y}%`,
    left: `${props.position.x}%`,
    width: '50px',
    height: '50px',
    backgroundColor: '#e74c3c',
    borderRadius: '50%',
    cursor: 'pointer',
  }));
  </script>
  
  <style scoped>
  .target {
    transition: background-color 0.3s;
  }
  
  .target:hover {
    background-color: #c0392b;
  }
  </style>
  