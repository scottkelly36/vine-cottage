<template>
  <section class="hero-section">
    <!-- Static text content -->
    <div class="hero-content">
      <h1 class="hero-heading">{{ componentData?.heading }}</h1>
      <h2 class="hero-subheading">{{ componentData?.subHeading }}</h2>
      <p class="hero-copy">{{ componentData?.copy }}</p>
      <div class="cta__container-hero">
        <primary-cta
          :text="'Book Your Stay'"
          :link="'#about'"
          :buttonClass="'secondary'"
        />
      </div>
    </div>

    <!-- Slider -->
    <Splide class="hero-slider" :options="options">
      <SplideSlide
        v-for="(image, index) in componentData.images"
        :key="index"
        class="hero-slide"
      >
        <img :src="imagePath(image)" alt="" class="hero-slide-image" />
      </SplideSlide>
    </Splide>

    <div class="hero-arrow__container">
      <p class="arrow-text">Scroll Down</p>
      <div class="arrow-wrapper">
        <img :src="arrowBase64" alt="" class="arrow bounce" />
      </div>
    </div>
  </section>
</template>

<script setup>
import "@splidejs/vue-splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import primaryCta from "./buttons/primary-cta.vue";

const props = defineProps({
  componentData: { type: Object, required: true },
});

const arrowBase64 =
  "data:image/svg+xml;base64," +
  btoa(`
  <svg xmlns="http://www.w3.org/2000/svg" fill="#f4f4f4" viewBox="0 0 16 16">
    <path
      fill-rule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
    />
  </svg>
`);

const imagePath = (img) => `${img}`;

const options = {
  pagination: false,
  arrows: false,
  autoplay: true,
  type: "fade",
  interval: 6000,
  rewind: true,
  speed: 2000,
};
</script>

<style>
.hero-section {
  position: relative;
  width: 100%;
  height: 95vh;
  overflow: hidden;
}

.hero-section::before {
  content: "";
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
  @media (min-width: 700px) {
    width: 350px;
    left: 30%;
  }

  @media (min-width: 1024px) {
    width: 450px;
    left: 25%;
  }
}

.hero-heading {
  font-size: 40px;
  font-weight: 700;
}
.hero-subheading {
  font-size: 30px;
  font-weight: 600;
}
.hero-copy {
  font-size: 16px;
  font-weight: 600;
}

.hero-content h1,
.hero-content h2,
.hero-content p {
  margin: 0;
  padding: 0.5rem;
}

.splide__slide.is-active img {
  transform: scale(1.2);
}
.hero-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Ensure the slider takes up the full height of its parent */
}

.splide__track {
  height: 100%; /* Ensure the track takes up the full height */
}

.splide__list {
  height: 100%; /* Ensure the list takes up the full height */
  display: flex; /* Allow slides to fill the available space */
  align-items: stretch; /* Ensure slides stretch to the full height */
}

.splide__slide {
  height: 100%; /* Make each slide take up the full height of the list */
}

.hero-slide img {
  height: 100%; /* Ensure the image fills the height of the slide */
  min-height: 100%; /* Prevent collapsing on larger screens */
  width: 100%; /* Ensure the image fills the width */
  object-fit: cover; /* Maintain aspect ratio and cover the area */
  object-position: center; /* Align the image as needed */
  transition: transform 6s ease-in-out;
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.hero-arrow__container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically within the container */
  align-items: center; /* Center content horizontally */
  gap: 10px; /* Space between text and arrow */
  z-index: 10;
  bottom: 20px; /* Adjust positioning from the bottom */
  width: 100%;
  text-align: center; /* Ensure text is centered */
}

.arrow-text {
  font-size: 20px;
  color: #f4f4f4;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0; /* Remove default margins for precise alignment */
}

.arrow-wrapper {
  margin: auto;
}

.arrow {
  width: 50px; /* Set a fixed width for the arrow */
  height: auto; /* Maintain aspect ratio */
}

.cta__container-hero {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
