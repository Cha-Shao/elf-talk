<script setup lang="ts">
import Footer from "./components/Sidebar.vue";
</script>

<template>
  <div class="flex p-2">
    <Footer />
    <main class="flex-grow">
      <RouterView />
    </main>
  </div>
</template>
