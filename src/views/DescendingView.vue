<template>
  <div class="descending">
    <h1>Descending Order</h1>
    <ImagesGrid sort="desc" />
  </div>
</template>

<script>
import ImagesGrid from "@/components/images/ImagesGrid.vue";

export default {
  name: "DescendingView",
  components: { ImagesGrid },
};
</script>
