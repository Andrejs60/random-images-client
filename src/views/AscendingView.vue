<template>
  <div class="ascending">
    <h1>Ascending Order</h1>
    <ImagesGrid sort="asc" />
  </div>
</template>

<script>
import ImagesGrid from "@/components/ImagesGrid.vue";

export default {
  name: "AscendingView",
  components: { ImagesGrid },
};
</script>
