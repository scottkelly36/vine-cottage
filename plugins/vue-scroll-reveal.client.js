import { createScrollRevealDirective } from "vue-scroll-reveal";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("Initializing vue-scroll-reveal plugin");

  nuxtApp.vueApp.directive(
    "scroll-reveal",
    createScrollRevealDirective({
      duration: 1500,
      delay: 200,
    })
  );

  console.log("vue-scroll-reveal plugin initialized");
});
