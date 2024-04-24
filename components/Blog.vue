<template>
  <search-input @search="onSearch"/>
  <list-of-posts :posts="posts" @select-post="onPostSelected"/>
  <pagination @pageChanged="onPageChanged" :pageCount="10" :total="total"/>
</template>
<script setup lang="ts">
import type {IPost} from "@/model/posts";
import {getPosts} from "@/api/posts";

const router = useRouter()
const posts = ref<IPost[]>()
const total = ref<number>(100)

function onPostSelected(postId: number) {
  router.push("posts/" + postId)
}
function onPageChanged(pageNumber: number) {
  updatePosts(pageNumber)
}
function onSearch(value: string) {
  updatePosts(1, value)
}
function updatePosts(page: number, titleFragment?: string) {
  getPosts(page, 10, titleFragment).then(async res => {
    const data = await res.json()
    posts.value = data
  })
}

updatePosts(1)
</script>