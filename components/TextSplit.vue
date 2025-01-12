<template>
  <div class="text-split__section">
    <div class="text-split__image-container" v-if="componentData?.image">
      <img :src="imagePath" alt="" />
    </div>
    <div
      :class="imagePath ? 'text-split__content' : 'text-split__content-full'"
    >
      <div class="text-split__heading-container">
        <Title :title="componentData.title" />
      </div>
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
import Title from "~/components/Title.vue";
import Cta from "./Cta.vue";

const props = defineProps({
  componentData: { type: Object, required: true },
});

const imagePath = props.componentData.image
  ? `${props.componentData.image}`
  : null;
</script>

<style>
.text-split__copy {
  text-align: center;
  font-size: 14px;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
}

.text-split__copy p {
  margin-bottom: 16px;
}
.text-split__section {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  gap: 25px;
  align-items: center;
  justify-content: center;

  @media (min-width: 700px) {
    margin: 0 120px;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 70px;
  }
}

.text-split__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (min-width: 1024px) {
    width: 50%;
  }
}

.text-split__content-full {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.text-split__image-container {
  width: 100%;
  @media (min-width: 700px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
}

.text-split__image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
