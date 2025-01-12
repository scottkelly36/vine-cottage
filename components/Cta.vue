<template>
  <div>
    <div class="ftb-widget" :data-id="widgetId" :data-token="widgetToken"></div>
  </div>
</template>

<script>
export default {
  props: {
    widgetId: {
      type: String,
      required: true,
    },
    widgetToken: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // Dynamically load the external script
    const script = document.createElement("script");
    script.src = "https://widget.freetobook.com/widget.js?v=20190925";
    script.async = true;
    script.onload = () => {
      console.log("FreeToBook widget loaded");
    };
    document.body.appendChild(script);
  },
};
</script>

<style>
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
