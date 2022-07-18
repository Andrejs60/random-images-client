<template>
  <div class="random">
    <h1>Random Order</h1>
    <ImagesGrid sort="random" />
  </div>
</template>

<script>
import ImagesGrid from "@/components/ImagesGrid.vue";

export default {
  name: "RandomView",
  components: { ImagesGrid },
};
</script>
