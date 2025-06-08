<template>
  <ClientOnly>
    <div>
      <div
        class="ftb-widget"
        :data-id="widgetId"
        data-style="review"
        :data-token="widgetToken"
      ></div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  widgetId: {
    type: String,
    required: true,
  },
  widgetToken: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  const scriptId = "freetobook-widget-script";

  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://widget.freetobook.com/widget.js?v=20190925";
    script.async = true;
    script.onload = () => {
      console.log("FreeToBook widget script loaded");
    };
    document.body.appendChild(script);
  }
});
</script>

<style scoped>
.ftb-widget .input-daterange input {
  font-size: 14px;
  font-weight: 600;
  width: 100%;
}
.ftb-bookingWidget__dateSearchContainer {
  display: flex !important;
  flex-direction: column !important;
  gap: 10px;
}
.ftb-bookingWidget__dateSearchButton {
  width: 100% !important;
}
.ftb-widget
  .ftb-bookingWidget__inner--md:not(.ftb-bookingWidget__inner--block)
  .ftb-bookingWidget__dateSearch {
  width: 100% !important;
}
.ftb-bookingWidget__checkAvailability {
  border-radius: 5px !important;
  border: none !important;
}
</style>
