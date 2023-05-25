<script setup lang="ts">
import { servers } from "../lib/server";
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="bg-lbg p-2 rounded-2xl w-16 h-[calc(100vh-1rem)] mr-2 grid grid-rows-[1fr_min-content] gap-2"
  >
    <div class="flex-grow overflow-x-hidden overflow-y-scroll hide-scroll">
      <RouterLink
        v-for="(data, i) in servers"
        :to="`/dialog/${data.uuid}`"
        :key="i"
        class="w-12 h-12 mb-2"
      >
        <img :src="data.image" alt="Image" class="w-full h-full rounded-full" />
      </RouterLink>
      <RouterLink to="/join" class="h-fit">
        <div class="w-12 h-12 bg-lpbg rounded-full flex">
          <Icon icon="ph:compass" width="32" class="m-auto opacity-75" />
        </div>
      </RouterLink>
    </div>
    <RouterLink to="/settings" class="h-fit">
      <div class="w-12 h-12 bg-lpbg rounded-full flex">
        <Icon icon="ph:gear-six" width="32" class="m-auto opacity-75" />
      </div>
    </RouterLink>
  </div>
</template>
