<template>
  <div class="post-card">
    <span class="post-card-title">
      {{ title }}
    </span>
    <p class="post-card-body">
      {{ body }}
    </p>
  </div>
</template>
<script setup lang="ts">
export interface IPostCardProps {
  title: string
  body: string
}

const props = withDefaults(defineProps<IPostCardProps>(), {})
</script>
<style>
.post-card {
  border: white solid 1px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  cursor: pointer;
  overflow: hidden;
}
.post-card-title {
  display: block;
  font-size: 20px;
  line-height: 20px;
  max-lines: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  margin-bottom: 16px;
  line-clamp: 2;
}
.post-card-body {
  font-size: 12px;
  line-height: 12px;
  text-overflow: ellipsis;
}
</style>