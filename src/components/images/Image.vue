<template>
  <div class="card mb-3">
    <img :src="image" class="card-img-top" />
  </div>
</template>

<script>
export default {
  name: "Image",
  props: ["image"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  border-radius: 0px;
}

img {
  background: #fff;
  border-radius: 0px;
}
</style>
