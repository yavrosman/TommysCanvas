<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="80" height="80">
    <defs>
      <pattern id="roofPattern" patternUnits="userSpaceOnUse" width="4" height="4">
        <rect width="4" height="4" fill="#ff6666" />
        <path d="M 0 4 L 4 0" stroke="#cc3333" stroke-width="1" />
        <path d="M 4 4 L 0 0" stroke="#cc3333" stroke-width="1" />
      </pattern>
    </defs>
    <!-- Chimney -->
    <rect x="40" y="12" width="6" height="10" fill="#ff6666" stroke="#000" stroke-width="2"/>
    <!-- House base -->
    <rect x="12" y="24" width="40" height="28" fill="#ffcc99" stroke="#000" stroke-width="2"/>
    <!-- Roof -->
    <polygon points="32,8 8,24 56,24" fill="url(#roofPattern)" stroke="#000" stroke-width="2"/>
    <!-- Door -->
    <rect x="28" y="40" width="8" height="10" fill="#663300" stroke="#000" stroke-width="2"/>
    <circle cx="34" cy="45" r="1" fill="#000" />
    <!-- Windows -->
    <rect x="18" y="28" width="8" height="8" fill="#ffffff" stroke="#000" stroke-width="2"/>
    <rect x="38" y="28" width="8" height="8" fill="#ffffff" stroke="#000" stroke-width="2"/>
    <!-- Window covers -->
    <rect x="21.5" y="28" width="1" height="8" fill="#663300" stroke="#000" stroke-width="1"/>
    <rect x="41.5" y="28" width="1" height="8" fill="#663300" stroke="#000" stroke-width="1"/>
    <!-- Clouds -->
    <circle class="cloud cloud1" cx="43" cy="10" r="3" fill="#ffffff" />
    <circle class="cloud cloud2" cx="46" cy="8" r="2" fill="#ffffff" />
    <circle class="cloud cloud3" cx="40" cy="8" r="2" fill="#ffffff" />
  </svg>
</template>

<script>
export default {
  name: 'House'
}
</script>

<style scoped>
@keyframes cloudAnimation1 {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-10px, -20px);
  }
}

@keyframes cloudAnimation2 {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(10px, -25px);
  }
}

@keyframes cloudAnimation3 {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-5px, -15px);
  }
}

.cloud1 {
  animation: cloudAnimation1 2s infinite;
}

.cloud2 {
  animation: cloudAnimation2 2.5s infinite;
}

.cloud3 {
  animation: cloudAnimation3 3s infinite;
}
</style>
