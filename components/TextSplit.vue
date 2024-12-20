<template>
  <div class="text-split__section">
    <img v-if="componentData?.image" :src="imagePath" alt="" />
    <div class="text-split__heading-container">
      <Title :title="componentData.title" />
    </div>
    <div class="text-split__content">
      <div class="text-split__copy" v-html="componentData.content" />
      <Cta
        v-if="componentData?.showCta"
        widget-id="49236"
        widget-token="lnVCAh01LAb5DT3HY31vxw8OXlPgqs8XT3Umt8Lg7rDAMDEYsOblYSKIDrMZV"
      />
    </div>
  </div>
</template>

<script setup>
import Title from '~/components/Title.vue';
import Cta from './Cta.vue';

const props = defineProps({
  componentData: { type: Object, required: true },
});

const imagePath = `${props.componentData.image}`;
</script>

<style>
.text-split__copy {
  text-align: center;
  font-size: 12px;
}

.text-split__copy p {
  margin-bottom: 16px;
}
.text-split__section {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  gap: 25px;
}
</style>
