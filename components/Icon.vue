<template>
  <component :is="iconComponent" />
</template>

<script setup>
import Steps from "./Icons/Steps.vue";
import Smoking from "./Icons/Smoking.vue";
import Pets from "./Icons/Pets.vue";
import Parties from "./Icons/Parties.vue";
import ChevronRight from "./Icons/ChevronRight.vue";
import Facebook from "./Icons/Facebook.vue";
import Insta from "./Icons/Insta.vue";
import Twitter from "./Icons/Twitter.vue";

const props = defineProps({
  iconName: { type: String, required: true },
});

const iconMap = {
  Steps,
  Smoking,
  Pets,
  Parties,
  ChevronRight,
  Facebook,
  Insta,
  Twitter,
};

const iconComponent = iconMap[props.iconName] || null;
</script>
