<template>
  <div class="parallax">
    <div class="overlay"></div>
  </div>
</template>

<script setup></script>

<style>
.parallax {
  /* The image used */
  background-image: url("../public/images/Hexham-Corbridge.jpg");

  /* Set a specific height */
  min-height: 250px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (min-width: 700px) {
    min-height: 450px;
  }

  @media (min-width: 1024px) {
    min-height: 575px;
  }
}
.overlay {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.6) 14%,
    rgba(67, 17, 161, 0) 100%
  );
  position: absolute;
}
</style>
