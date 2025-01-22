<template>
  <div class="four-card-gallery__container">
    <div
      class="card__item"
      v-for="(image, index) in visibleImages"
      :key="index"
    >
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  componentData: { type: Array, required: true }, // Ensure componentData is an array
});

// Reactive property to track the current screen size
const isLargeScreen = ref(window.innerWidth >= 1350);

// Update the screen size when the window is resized
const updateScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1350;
};

// Compute the visible images based on screen size
const visibleImages = computed(() => {
  return isLargeScreen.value
    ? props.componentData
    : props.componentData.slice(0, 4);
});

// Add and remove event listener for window resize
onMounted(() => {
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<style>
.four-card-gallery__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 equal columns */
  gap: 20px; /* Even gap between images */
  justify-items: center; /* Center the images horizontally */
  align-items: center; /* Center the images vertically */
  margin: 0 auto; /* Center the entire grid in the container */

  @media (min-width: 1350px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* Adjust grid to 3 columns for larger screens */
  }
}

.card__item {
  width: 140px;
  height: 140px;

  @media (min-width: 700px) {
    width: 300px;
    height: 300px;
  }
}

.card__item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
