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
    <div class="cta__container">
      <primary-cta
        :text="'Book Your Stay'"
        :link="'#Book-now'"
        :onClick="onClick"
      />
    </div>
  </div>
</template>

<script setup>
import primaryCta from "./buttons/primary-cta.vue";

const props = defineProps({
  componentData: { type: Object, required: true },
  onClick: Function,
});
</script>

<style>
.warning-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media (min-width: 700px) {
    margin: 0 120px;
  }
}

.warnings-title {
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 22px;
  }
}

.warning-item {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
}
.warnings-container {
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 75px;
  }
}
</style>
