<script setup lang="ts">
interface Props {
  modelValue: string;
  placeholder?: string;
  maxLength?: number;
}

const props = defineProps<Props>();
const emits = defineEmits(["update:modelValue"]);

const handleInput = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="bg-lpbg rounded-md flex h-8 px-2">
    <div v-if="$slots.prefix">
      <slot name="prefix" />
    </div>
    <input
      :value="props.modelValue"
      @input="handleInput"
      class="w-full flex-grow bg-transparent outline-none"
      :maxLength="props.maxLength"
      :placeholder="props.placeholder"
    />
    <div v-if="$slots.suffix">
      <slot name="suffix" />
    </div>
  </div>
</template>
