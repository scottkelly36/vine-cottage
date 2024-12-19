<template>
    <div class="text-split__section">
        <img :src="imagePath" alt=""/>
        <div class="text-split__heading-container-mob">
            <Title :title="componentData.title"/>
        </div>
        <div class="text-split__content">
            <div class="text-split__copy" v-html="componentData.content"/>

        </div>
    </div>
    
  </template>
  
  <script setup>
  import Title from '~/components/Title.vue';
  
 const props = defineProps({
    componentData: { type: Object, required: true }
  });

  const imagePath = `${props.componentData.image}`;

  </script>
  
  <style>
    .text-split__copy{
        text-align: center;
        font-size: 14px;
    }

    .text-split__copy p {
        margin-bottom: 12px;
    }
    .text-split__section{
        display: flex;
        flex-direction: column;
        margin: 0 20px;
        gap: 25px;
    }
  </style>
  