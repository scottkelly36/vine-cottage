<template>
  <div class="title__container">
    <h3 class="title__text">{{ props.title }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style>
.title__container {
  background-image: url("../assets/logos/icon.png");
  height: 160px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title__text {
  font-size: 20px;
  text-transform: capitalize;
  text-align: center;
  font-weight: 600;
}
</style>
