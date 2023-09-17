<!-- eslint-disable -->
<template>
<!-- 分頁器 -->
  <nav class="mt-8 d-none d-md-block" aria-label="Page navigation">
    <div class="pagination justify-content-center">
      <div class="page-item" v-if="pageArr.length !== 1 && NOW_PAGE !== 1">
        <a class="page-link page-previous" href="#" aria-label="Previous" @click.prevent="toPrePage">
          <span class="page-previous" aria-hidden="true">&laquo;</span>
        </a>
      </div>
      <div id="paginator" class="d-flex">
        <div
          v-for="(item,index) in pageArr" :key="index"
          class="page-item"
          :class="{ 'active' : item == NOW_PAGE }"
        >
          <div v-if="item === '...'" class="page-item page-ellipsis"><p>{{ item }}</p></div>
          <div v-else class="page-item" @click.prevent="toPage(item)"><a class="page-link">{{ item }}</a></div>
        </div>
      </div>
      <div class="page-item" v-if="pageArr.length !== 1 && NOW_PAGE !== totalPage">
        <a class="page-link page-next" href="#" aria-label="Next" @click.prevent="toNextPage">
          <span class="page-next" aria-hidden="true">&raquo;</span>
        </a>
      </div>
    </div>
  </nav>
  <!-- 手機版按鈕 -->
  <nav class="d-block d-md-none mt-4" v-if="this.NOW_PAGE < this.totalPage">
    <div class="bg-white d-flex justify-content-end align-items-center">
      <a href="#" class="btn-detail-modal btn btn-warning btn-watch-more" @click.prevent="getDataByClick"
        >點我看更多</a
      >
    </div>
  </nav>
  <nav class="d-block d-md-none mt-4" v-else>
    <p>已經顯示完所有毛孩囉!</p>
  </nav>
</template>

<style lang="scss">
a{
  cursor: pointer;
}
</style>

<script>
import adoptStore from '@/stores/adoptStore';
import paginationStore from '@/stores/paginationStore';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(paginationStore, ['NOW_PAGE', 'pageArr', 'totalPage', 'CARDS_PER_PAGE']),
    ...mapState(adoptStore, ['pageData']),
  },
  methods: {
    ...mapActions(adoptStore, ['renderPage', 'renderNextPage', 'renderPrePage', 'getDataByClick']),
    scrollToElement() {
      // 使用 $refs 獲取元件的參考
      const elementRef = this.$parent.$refs.searchBar;
      if (elementRef) {
        elementRef.$el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toPage(page) {
      this.renderPage(page);
      this.scrollToElement();
    },
    toNextPage() {
      this.renderNextPage();
      this.scrollToElement();
    },
    toPrePage() {
      this.renderPrePage();
      this.scrollToElement();
    },
  },
};

</script>
