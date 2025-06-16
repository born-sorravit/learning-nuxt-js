<template>
  <div @click="props.onClick">
    {{ props.message }}
  </div>

  <button @click="handleChange">click</button>
</template>

<script setup lang="ts">
interface TodoProps {
  message: string;
  onClick: () => void;
}

const props = defineProps<TodoProps>();

const emit = defineEmits<{
  (event: "update:message", value: string): void;
}>();

const handleChange = () => {
  emit("update:message", "Button clicked!");
  console.log("Button clicked");
};
</script>

<style lang="scss" scoped></style>
