<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "页面标签",
  },
});
</script>

<template>
  <div class="page-head">
    <p class="page-title">{{ props.title }}</p>
    <div class="action-btn">
      <slot name="buttons" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-head {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-title {
    font-size: 24px;
    color: #2d3748;
  }
}
</style>
