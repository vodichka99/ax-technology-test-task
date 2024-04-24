<template>
  <div class="header">
    <span class="header-title">AX TECHNOLOGY TEST TASK</span>
    <slot/>
  </div>
</template>
<style>
.header {
  width: 100%;
  min-height: 40px;
  border-bottom: white solid 1px;
  display: flex;
  justify-content: space-between;
}
.header-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
}
</style>