<template>
  <div class="post">
    <div class="post-info">
      <h3 class="post-info-title">{{ info?.title }}</h3>
      <span class="post-info-body">{{ info?.body }}</span>
    </div>
    <post-comments :comments="comments" @scrollDown="loadComments"/>
  </div>
</template>
<script setup lang="ts">
import {getPost} from "@/api/posts";
import {getComments} from "@/api/comments";

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export interface IPostComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const route = useRoute()
const info = ref<IPost>()
const comments = ref<IPostComment[]>([])

function loadComments(postId: number) {
  getComments(1, 10, postId).then(async r => {
    comments.value = await r.json()
  })
}

function loadPost() {
  const postId = route.params.id

  getPost(+postId).then(async r => {
    info.value = await r.json()
    loadComments(+postId)
  })
}

loadPost()

</script>
<style>
.post {
  height: 100%;
  width: 100%;
  display: flex;
  padding-bottom: 32px;
}

.post-info {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 8px;
}

.post-info-title {
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 16px;
}

.post-info-body {
  font-size: 24px;
  line-height: 24px;
}

.post-comments {
  width: 50%;
  border: white solid 1px;
  border-top: none;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>