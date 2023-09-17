<template>
  <AdoptBanner></AdoptBanner>
  <SearchBar ref="searchBar"></SearchBar>

  <div class="container mb-11 mb-lg-13">
    <StatusBar></StatusBar>
    <DataPanel></DataPanel>
    <DataPagination></DataPagination>
  </div>

  <a href="#" class="arrow-up position-fixed" v-show="showButton" @click.prevent="scrollToElement">
    <div class="arrow-up-icon bg-warning">
      <span class="link-arrow-icon material-icons">keyboard_double_arrow_up</span>
    </div>
  </a>
</template>

<script>
// components
import AdoptBanner from '@/components/adopt/AdoptBanner.vue';
import SearchBar from '@/components/adopt/SearchBar.vue';
import StatusBar from '@/components/adopt/StatusBar.vue';
import DataPanel from '@/components/adopt/DataPanel.vue';
import DataPagination from '@/components/adopt/DataPagination.vue';

// import adoptStore from '@/stores/adoptStore';
// import { mapState, mapActions } from 'pinia';

export default {
  components: {
    AdoptBanner,
    SearchBar,
    StatusBar,
    DataPanel,
    DataPagination,
  },
  data() {
    return {
      showButton: false,
    };
  },
  // computed: {
  //   ...mapState(adoptStore, ['adoptData', 'getUserName', 'INDEX_URL']),
  // },
  methods: {
    scrollToElement() {
      // 使用 $refs 獲取元件的參考
      const elementRef = this.$refs.searchBar;
      if (elementRef) {
        elementRef.$el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleScroll() {
      const scrollTop = window.scrollY;
      // 根據滾動高度決定隱藏與否
      this.showButton = scrollTop > 800;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
