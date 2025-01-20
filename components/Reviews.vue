<template>
  <Splide :options="options">
    <SplideSlide v-for="(testimonial, index) in componentData" :key="index">
      <div class="slide-container">
        <img
          :src="testimonial.image"
          alt="Background"
          class="background-image"
        />
        <div class="review-overlay"></div>
        <div class="slide-content">
          <h2 class="review__title">{{ testimonial.reviewTitle }}</h2>
          <div v-html="testimonial.reviewBody" class="review__body" />
          <div class="review-name__container">
            <p class="testimonial-name">{{ testimonial.reviewName }}</p>
            <small class="review__date">, {{ testimonial.reviewDate }}</small>
          </div>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const props = defineProps({
  componentData: { type: Array, required: true },
});

const options = {
  type: "fade",
  autoplay: true,
  interval: 9000,
  arrows: true,
  pagination: true,
  rewind: true,
  speed: 2000,
};
</script>

<style>
/* General Splide styles */
.slide-container {
  position: relative;
  height: 750px; /* Set your desired fixed height */
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    height: 500px;
  }
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image fills the area while maintaining aspect ratio */
  z-index: 0;
  transition: transform 4s ease-in-out;
}

.review-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 14%,
    rgba(67, 17, 161, 0) 100%
  ); /* Dark overlay */
  z-index: 1;
}

.slide-content {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  padding: 20px;
  width: 70%;
}

.review__body {
  font-weight: 600;
  font-size: 14px;

  @media (min-width: 700px) {
    font-size: 18px;
  }
}

.review__title {
  font-size: 20px;
  margin-bottom: 10px;

  @media (min-width: 700px) {
    font-size: 30px;
  }
}

.review-name__container {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
}

.testimonial-name {
  font-weight: 700;
  font-size: 16px;
}

.review__date {
  color: #f4f4f4;
  font-weight: 600;
  font-size: 14px;
}

/* Prevent jumping by ensuring consistent dimensions and transforms */
.Splide__slide.is-active .background-image {
  transform: scale(1.05); /* Subtle zoom effect for the active slide */
}

.Splide__slide:not(.is-active) .background-image {
  transform: scale(1); /* Ensure non-active slides are stable */
}

.splide__pagination {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.splide__pagination__page {
  width: 15px;
  height: 15px;
  border: #7a7256 solid 2px;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.splide__pagination__page.is-active {
  background-color: #7a7256;
}

.splide__arrow {
  background-color: transparent;
  font-size: 30px;
}

.splide__arrow svg {
  fill: #7a7256 !important;
}
</style>
