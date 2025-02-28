<template>
    <div class="home-view">
      <h1>Welcome to Tommy's Game!</h1>
      <button @click="startGame">Start Game</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const startGame = () => {
    router.push({ name: 'Game' });
  };
  </script>
  
  <style scoped>
  .home-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f4f8;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #3498db;
    color: #fff;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>