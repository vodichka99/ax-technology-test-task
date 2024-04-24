<template>
  <div class="list-of-posts">
    <post-card v-for="post in posts" :title="post.title" :body="post.body" @click="$emit('select-post', post.id)"/>
  </div>
</template>
<script setup lang="ts">
import type {IPost} from "@/model/posts";

export interface IPostsProps {
  posts?: IPost[]
}

const props = withDefaults(defineProps<IPostsProps>(), {})
</script>
<style>
.list-of-posts {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
</style>