<template>
  <footer>
    <div class="footer__logo-container">
      <img src="../assets/logos/full-logo-white.png" alt="" />
    </div>
    <div class="social-icons__container">
      <a :href="componentData.facebook" v-if="componentData.facebook">
        <Icon :iconName="'Facebook'" />
      </a>
      <a :href="componentData.insta" v-if="componentData.insta">
        <Icon :iconName="'Insta'" />
      </a>
      <a
        :href="componentData.twitter"
        v-if="componentData.twitter"
        class="icon"
      >
        <Icon :iconName="'Twitter'" />
      </a>
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
  margin-top: 100px;

  @media (min-width: 1024px) {
    gap: 30px;
  }
}
.footer__logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__logo-container img {
  width: 50%;
  max-width: 500px;
  min-width: 250px;
}
.footer-address__container {
  color: #f4f4f4;
  text-align: center;
  font-size: 18px;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 22px;
  }
}

.footer-email__link {
  color: #f4f4f4;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
}

.footer-email__link:hover {
  text-decoration: underline;
}

.social-icons__container {
  display: flex;
  column-gap: 20px;
  color: #f4f4f4;
}
.icon {
  color: #f4f4f4;
  font-size: 30px;
}
</style>
