<template>
  <div class="warning-wrapper">
    <h3 class="warnings-title">{{ componentData.title }}</h3>
    <div class="warnings-container"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  componentData: { type: Object, required: true },
});
</script>

<style>
.warning-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.warnings-title {
  font-size: 20px;
  font-weight: 500;
}
</style>
