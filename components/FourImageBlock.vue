<template>
  <div class="four-card-gallery__container">
    <div
      class="card__item"
      v-for="(image, index) in props.componentData"
      :key="index"
    >
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  componentData: { type: Object, required: true },
});
</script>
<style>
.four-card-gallery__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 equal columns */
  gap: 20px; /* Even gap between images */
  justify-items: center; /* Center the images horizontally */
  align-items: center; /* Center the images vertically */
  max-width: 320px; /* Optional, adjust if needed */
  margin: 0 auto; /* Center the entire grid in the container */
}

.card__item {
  width: 140px;
  height: 140px;
}

.card__item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
