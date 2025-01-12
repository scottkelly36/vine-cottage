<template>
  <a :href="link" class="button" :class="`button--${buttonClass}`">{{
    text
  }}</a>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  buttonClass: {
    type: String,
    default: "primary",
  },
});
</script>

<style>
.button {
  text-decoration: none;
  font-size: 16px;
  padding: 20px 40px;
  height: 28px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 18px;
  border-radius: 5px;
}

.button--primary {
  background-color: #7a7256;
  color: #f4f4f4;
  border: solid 1px #7a7256;
  transition: ease-in-out 0.5s;
}

.button--primary:hover {
  background-color: #f4f4f4;
  color: #7a7256;
}

.button--secondary {
  background-color: transparent;
  color: #f4f4f4;
  border: solid 1px #f4f4f4;
  transition: ease-in-out 0.5s;
}

.button--secondary:hover {
  background-color: #f4f4f4;
  color: #7a7256;
}
</style>
