<script setup lang="ts">
interface Props {
  title?: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="p-4 bg-lbg dark:bg-dbg rounded-2xl">
    <h3 v-if="props.title" class="text-6 font-bold mb-4">{{ props.title }}</h3>
    <slot />
  </div>
</template>
