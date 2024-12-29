<template>
    <section class="hero-section">
      <!-- Static text content -->
      <div class="hero-content">
        <h1 class="hero-heading">{{ componentData?.heading }}</h1>
        <h2 class="hero-subheading">{{ componentData?.subHeading }}</h2>
        <p class="hero-copy">{{ componentData?.copy }}</p>
      </div>
      
      <!-- Slider -->
      <Splide class="hero-slider" :options="options">
        <SplideSlide
          v-for="(image, index) in componentData.images"
          :key="index"
          class="hero-slide"
        >
          <img
            :src="imagePath(image)"
            alt=""
            class="hero-slide-image"
          />
        </SplideSlide>
      </Splide>
    </section>
  </template>
  

  <script setup>
  import '@splidejs/vue-splide/css';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  
  const props = defineProps({
    componentData: { type: Object, required: true },
  });
  
  const imagePath = (img) => `${img}`;
  
  const options = {
    pagination: false,
    arrows: false,
    autoplay: true,
    type: 'fade',
    interval: 6000,
    rewind: true,
    speed: 2000,
  };
  </script>

<style>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.6) 14%,
        rgba(67, 17, 161, 0) 100%
      );
    z-index: 5;
    pointer-events: none; /* Ensures overlay doesn’t interfere with interactions */
  }

.hero-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
  top: 35%;
  left: 45%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  width: 80%;
}

.hero-heading{
    font-size: 40px;
    font-weight: 700;
}
.hero-subheading{
    font-size:30px;
    font-weight: 600;
}
.hero-copy{
    font-size: 16px;
}

.hero-content h1,
.hero-content h2,
.hero-content p {
  margin: 0;
  padding: 0.5rem;
}

.hero-slider {
  width: 100%;
  height: 100%;
}

.hero-slide img {
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  object-fit: cover;
  transition: transform 6s ease-in-out;
  object-position: center;
}

.splide__slide.is-active img {
  transform: scale(1.2);
}
</style>