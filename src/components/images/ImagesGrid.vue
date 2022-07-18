<template>
  <div class="grid" v-if="images.length">
    <div class="grid-item" v-for="image in images" :key="image">
      <Image :image="image" />
    </div>
  </div>
  <p v-else>Loading images...</p>
</template>

<!-- <template>
  <div class="row row-cols-1 row-cols-md-4 g-4 m-1" v-if="images.length">
    <div class="col" v-for="image in images" :key="image">
      <Image :image="image" />
    </div>
  </div>
  <p v-else>Loading images...</p>
</template> -->

<script>
import axios from "axios";
import Image from "./Image.vue";

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

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 12px;
}

.grid-item {
  border: 1px solid #ccc;
  background: #f5ebe0;
  padding: 1rem;
  border-radius: 5px;
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 800px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
