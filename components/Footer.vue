<template>
  <footer>
    <div class="footer__logo-container">
      <img src="../assets/logos/full-logo-white.png" alt="" />
    </div>
    <div v-html="componentData?.address" class="footer-address__container" />
    <div class="footer-email__container">
      <a
        :href="`mailto:${componentData.emailAddress}`"
        class="footer-email__link"
        >{{ componentData.emailAddress }}</a
      >
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  componentData: { type: Object, required: true },
});

console.log(props);
</script>

<style>
footer {
  background-color: #7a7256;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}
.footer__logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__logo-container img {
  width: 50%;
}
.footer-address__container {
  color: #f4f4f4;
  text-align: center;
  font-size: 18px;
}

.footer-email__link {
  color: #f4f4f4;
  text-decoration: none;
  font-size: 14px;
}

.footer-email__link:hover {
  text-decoration: underline;
}
</style>
