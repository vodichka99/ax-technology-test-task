<template>
  <div class="page-wrapper">
    <page-header/>
    <slot/>
  </div>
</template>
<style>
.page-wrapper {
  height: 100vh;
  width: 100vw;
  background-color: #212121;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 184px 0 184px;
}
</style>