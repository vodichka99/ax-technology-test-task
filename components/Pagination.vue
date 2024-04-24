<template>
  <div class="pagination-wrapper">
    <u-pagination v-model="page" :page-count="pageCount" :total="total"/>
  </div>
</template>
<script setup lang="ts">
import {watch} from "@vue/runtime-core";
import {ref} from "@vue/reactivity";

export interface IPaginationProps {
  pageCount: number
  total: number
}

const page = ref(1)
const emit = defineEmits(['pageChanged'])

watch(page, (newVal) => {
  emit('pageChanged', newVal)
})

const props = withDefaults(defineProps<IPaginationProps>(), {})
</script>
<style>
.pagination-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  margin-top: 16px;
}
</style>
