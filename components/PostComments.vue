<template>
  <div class="post-comments" @scroll="onScroll" @wheel="onWheel">
    <div class="post-comment" v-for="comment in comments">
      <div class="post-comment-user">
        <span class="post-comment-user-name">{{ comment.name }}</span>
        <span class="post-comment-user-email">{{ comment.email }}</span>
      </div>
      <div class="post-comment-body">
        <span class="post-comment-body-text">{{ comment.body }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type {IComment} from "@/model/comments";

const scrollDown = ref<boolean>()
const emit = defineEmits(["scrollDown"])

function onWheel() {
  if (scrollDown.value) {
    emit("scrollDown")
  }
  scrollDown.value = true
}

function onScroll() {
  scrollDown.value = false
}

export interface IPostCommentsProps {
  comments: IComment[]
}

const props = withDefaults(defineProps<IPostCommentsProps>(), {})
</script>
<style>
.post-comment {
  border-bottom: 1px solid white;
}
.post-comments {
  max-height: 90vh;
  overflow: auto;
}
.post-comment-user {
  background-color: white;
  color: #212121;
  display: flex;
}
.post-comment-user-name,
.post-comment-user-name {
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>