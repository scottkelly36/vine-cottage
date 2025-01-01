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

<style></style>
