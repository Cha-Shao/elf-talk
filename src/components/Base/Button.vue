<script setup lang="ts">
interface Props {
  type?: "primary" | "secondary";
}
const props = defineProps<Props>();
</script>

<template>
  <button class="flex items-center duration-200 hover:brightness-105 h-8 px-2 rounded-md">
    <span>
      <slot />
    </span>
  </button>
</template>
