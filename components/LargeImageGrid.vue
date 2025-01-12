<template>
  <div class="large-image-grid__container">
    <div
      class="large-image-grid__item"
      v-for="(image, index) in componentData"
      :key="index"
    >
      <img :src="image" alt="" class="large-image-grid__item-img" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  componentData: { type: Object, required: true },
});
console.log(props);
</script>

<style>
.large-image-grid__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 equal columns */
  gap: 20px; /* Even gap between images */
  justify-items: center; /* Center the images horizontally */
  align-items: center; /* Center the images vertically */
  margin: 0 auto; /* Center the entire grid in the container */

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 100%; /* Remove restriction on max-width */
  }
  @media (min-width: 1350px) {
    grid-template-columns: repeat(4, 1fr); /* Limit to a maximum of 4 columns */
  }
}

.large-image-grid__item {
  width: 140px;
  height: 140px;

  @media (min-width: 700px) {
    width: 300px;
    height: 300px;
  }
}

.large-image-grid__item-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
