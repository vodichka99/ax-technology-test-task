<template>
  <UInput v-model="value" icon="i-heroicons-magnifying-glass-20-solid" color="primary" variant="none" placeholder="Search..." />
</template>
<script setup lang="ts">
const value = ref()
const emit = defineEmits(['search'])

watch(value, (v) => {
  emit("search", v)
})
</script>