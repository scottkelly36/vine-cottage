<template>
  <nav class="nav__container">
    <div class="nav__container-inner">
      <div class="nav__logo-container">
        <img src="../assets/logos/icon.png" alt="" class="nav__logo" />
      </div>
      <div class="nav__links-container">
        <div class="nav__links-desktop">
          <ul>
            <li><a @click="smoothScrollTo('#Home')">Home</a></li>
            <li><a @click="smoothScrollTo('#About')">About</a></li>
            <li><a @click="smoothScrollTo('#Book-now')">Book Now</a></li>
            <li><a @click="smoothScrollTo('#Features')">Features</a></li>
            <li>
              <a @click="smoothScrollTo('#Explore-the-north')"
                >Explore the North</a
              >
            </li>
          </ul>
        </div>
        <div class="hamburger" :class="{ open: isOpen }" @click="toggle">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </div>

    <!-- Navigation Drawer -->
    <div class="nav__drawer" :class="{ open: isOpen }">
      <ul>
        <li><a @click="smoothScrollTo('#Home')">Home</a></li>
        <li><a @click="smoothScrollTo('#About')">About</a></li>
        <li><a @click="smoothScrollTo('#Book-now')">Book Now</a></li>
        <li><a @click="smoothScrollTo('#Features')">Features</a></li>
        <li>
          <a @click="smoothScrollTo('#Explore-the-north')">Explore the North</a>
        </li>
      </ul>
    </div>

    <!-- Optional Overlay -->
    <div class="overlay-nav" v-if="isOpen" @click="toggle"></div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const smoothScrollTo = (id) => {
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
    toggle();

    // Reinitialize Vue Scroll Reveal for the target section
    setTimeout(() => {
      const { $vueScrollReveal } = useNuxtApp();
      const elements = target.querySelectorAll(".v-scroll-reveal");
      elements.forEach((el) => {
        $vueScrollReveal.reveal(el);
      });
    }, 500); // Wait for scroll to complete
  }
};
</script>

<style>
.nav__container {
  width: 100%;
  background-color: #f4f4f4;
  height: fit-content;
  padding: 0px 20px;
  position: fixed;
  z-index: 99;

  @media (min-width: 700px) {
    padding: 0px 120px;
  }
}

.nav__logo-container {
  padding: 10px 0;
  width: fit-content;
}

.nav__logo {
  height: 50px;
  @media (min-width: 1024px) {
    height: 60px;
  }
}

.nav__links-container {
  width: fit-content;
}

.nav__container-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hamburger {
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
  z-index: 1000;

  @media (min-width: 1024px) {
    display: none;
  }
}

.hamburger div {
  width: 100%;
  height: 3px;
  background-color: #7a7256;
  transition: all 0.3s ease;
  border-radius: 5px;
}

.hamburger.open .line1 {
  transform: rotate(45deg) translateY(15.5px);
}

.hamburger.open .line2 {
  opacity: 0;
}

.hamburger.open .line3 {
  transform: rotate(-45deg) translateY(-15.5px);
}

.nav__drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 70%;
  height: 100%;
  background-color: #f4f4f4;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 999;

  @media (min-width: 700px) {
    padding: 75px 40px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
}

.nav__drawer.open {
  right: 0;
}

.nav__links-desktop ul {
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav__links-desktop li {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.nav__links-desktop a:hover {
  color: #7a7256;
}

.nav__drawer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav__drawer li {
  margin: 20px 0;
}

.nav__drawer a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.nav__drawer a:hover {
  color: #7a7256;
}

/* Overlay */
.overlay-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  transition: opacity 0.3s ease-in-out;

  @media (min-width: 1024px) {
    display: none;
  }
}
</style>
