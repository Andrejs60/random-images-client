<template>
  <div class="row row-cols-1 row-cols-md-4 g-4 m-1" v-if="images.length">
    <div class="col" v-for="image in images" :key="image">
      <Image :image="image" />
    </div>
  </div>
  <p v-else>Loading images...</p>
</template>

<script>
import axios from "axios";
import Image from "../components/Image.vue";

export default {
  name: "ImagesGrid",
  components: { Image },
  props: ["sort"],
  data() {
    return {
      images: [],
    };
  },
  created() {
    this.fetchImages(this.sort);
  },
  methods: {
    async fetchImages(sort) {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/images/${sort}`
        );
        this.images = data.images;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
