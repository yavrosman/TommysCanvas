<template>
    <div class="h-screen w-full bg-black flex flex-col items-center justify-center text-white p-4">
      <h1 class="text-2xl mb-4">01/03 Transactions</h1>
      <ul class="w-full max-w-lg text-center">
        <li v-for="(transaction, index) in transactions" :key="index" class="text-lg p-2">
          <span class="text-green-400">$ {{ transaction.amount.toLocaleString() }}</span> - 
          <span class="text-gray-400">{{ transaction.time }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        transactions: [],
      };
    },
    methods: {
      addTransaction() {
        const amount = Math.floor(Math.random() * (12500 - 100 + 1)) + 100;
        const time = new Date().toLocaleTimeString();
        this.transactions.unshift({ amount, time });
        // this.playSound();
  
        // Schedule the next transaction at a random interval (0s to 5min)
        const nextInterval = Math.random() * (5 * 60 * 1000);
        setTimeout(this.addTransaction, nextInterval);
      },
      generateInitialTransactions() {
        for (let i = 0; i < 20; i++) {
          const amount = Math.floor(Math.random() * (12500 - 100 + 1)) + 100;
          const time = new Date().toLocaleTimeString();
          this.transactions.unshift({ amount, time });
        }
      },
    },
    mounted() {
      this.generateInitialTransactions();
      this.addTransaction();
    },
  };
  </script>
  
  <style scoped>
    .h-screen{
        background: black;
        height: 100vh;
        color: white;
    }
    ul {
      max-height: 80vh;
        background: black;
        color: white;
      overflow-y: auto;
    }
  </style>
