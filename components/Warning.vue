<template>
  <div class="warning-wrapper">
    <h3 class="warnings-title">{{ componentData.title }}</h3>
    <div class="warnings-container">
      <div
        class="warning-item"
        v-for="(warning, index) in componentData.warnings"
        :key="index"
      >
        <Icon :iconName="warning.icon" />
        <p>{{ warning.text }}</p>
      </div>
    </div>
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
  gap: 50px;
}

.warnings-title {
  font-size: 20px;
  font-weight: 600;
}

.warning-item {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
.warnings-container {
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: flex-start;
}
</style>
