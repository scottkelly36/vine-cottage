<template>
  <nav class="nav__container">
    <div class="nav__container-inner">
      <div class="nav__logo-container">
        <img src="../assets/logos/icon.png" alt="" class="nav__logo" />
      </div>
      <div class="nav__links-container">
        <div class="hamburger" :class="{ open: isOpen }" @click="toggle">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.nav__container {
  width: 100%;
  background-color: #f4f4f4;
  height: fit-content;
  padding: 0px 20px;

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
}

.hamburger div {
  width: 80%;
  height: 3px;
  background-color: #7a7256;
  transition: all 0.3s ease;
  transform-origin: center;
  border-radius: 5px;
}

.hamburger.open .line1 {
  transform: rotate(45deg) translateY(10px);
}

.hamburger.open .line2 {
  opacity: 0;
}

.hamburger.open .line3 {
  transform: rotate(-45deg) translateY(-10px);
}
</style>
