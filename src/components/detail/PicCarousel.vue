<template>
  <div class="order-1 order-md-2 col-md-5 col-lg-6 carousel">
    <img
      :src=currentImagePath
      alt="petpet_detail_img"
      class="carousel-item-active mb-2 mb-lg-3 rounded"
    />
    <ul class="d-flex">
      <li v-for="image in pictures" :key="image.path" class="carousel-items">
        <a
          @click.prevent="changeImage(image.path)"
          @keydown="handleKeyDown"
          tabindex="0"
        >
          <img
            class="carousel-items-img rounded"
            :style="{ filter: this.currentImagePath !== image.path ? 'grayscale(70%)' : 'none' }"
            :src="image.path"
            :alt="image.alt"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImagePath: 'assets/images/homestay-3.jpeg',
      pictures: [
        { path: 'assets/images/homestay-3.jpeg', alt: 'homestay-3' },
        { path: 'assets/images/index-5.jpeg', alt: 'index-5' },
        { path: 'assets/images/detail-1.jpeg', alt: 'index-1' },
        { path: 'assets/images/detail-2.jpeg', alt: 'index-2' },
      ],
    };
  },
  methods: {
    changeImage(newImagePath) {
      this.currentImagePath = newImagePath;
    },
    handleKeyDown() {
      // 處理鍵盤事件（此處可留空，只為滿足無障礙性要求）
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
}
</style>
