<template>
  <div>
    <h3 class="warnings-title"></h3>
    <div class="warnings-container"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  componentData: { type: Object, required: true },
});
</script>

<style></style>
