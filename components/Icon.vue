<template>
  <component :is="iconComponent" />
</template>

<script setup>
import Steps from "./Icons/Steps.vue";
import Smoking from "./Icons/Smoking.vue";
import Pets from "./Icons/Pets.vue";
import Parties from "./Icons/Parties.vue";

const props = defineProps({
  iconName: { type: String, required: true },
});

const iconMap = {
  Steps,
  Smoking,
  Pets,
  Parties,
};

const iconComponent = iconMap[props.iconName] || null;
</script>
