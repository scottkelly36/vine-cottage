<template>
  <div class="accordion-container">
    <div class="accordion-title__container">
      <div class="title-line"></div>
      <h3 class="accordion-title">Features</h3>
    </div>
    <AccordionList class="accordion-list" :open-multiple-items="true">
      <AccordionItem
        v-for="(accordionItem, index) in componentData?.items"
        title="First Item"
        :key="index"
        class="accordion-item"
      >
        <template #summary>{{ accordionItem.title }} </template>
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </template>
        <ul class="accordion-item__list-container">
          <li
            v-for="(bullet, index) in accordionItem?.bullets"
            :key="index"
            class="accordion-item__list-item"
          >
            {{ bullet }}
          </li>
        </ul>
      </AccordionItem>
    </AccordionList>
  </div>
</template>

<script setup>
import { AccordionList, AccordionItem } from "vue3-rich-accordion";

const props = defineProps({
  componentData: { type: Object, required: true },
});

console.log(props);
</script>

<style>
.accordion-container {
  margin: 0 15px;
}

.accordion-title__container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
}

.title-line {
  width: 100%;
  height: 1px;
  background-color: black;
  position: absolute;
}

.accordion-title {
  text-transform: uppercase;
  width: fit-content;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  background: white;
  text-align: center;
  padding: 0 20px;
}
.accordion-item {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: solid black 1px;
  transition: all 0.5s ease;
}

.accordion-item .accordion-item__summary {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.accordion-item .accordion-item__summary .accordion-item__summary-title {
  font-size: 16px;
  text-transform: uppercase;
}

.accordion-item__summary-icon {
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.accordion-item--open .accordion-item__summary-icon {
  rotate: 180deg;
}
.accordion-item__list-container {
  margin: 10px 20px;
  list-style-type: disc;
}
</style>
