<script setup lang="ts">
import Footer from "./components/Sidebar.vue";
</script>

<template>
  <div class="flex p-2">
    <Footer class="h-[calc(100vh-1rem)]"/>
    <main class="flex-grow h-[calc(100vh-1rem)]">
      <RouterView />
    </main>
  </div>
</template>
