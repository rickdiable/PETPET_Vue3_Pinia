<template>
  <AdoptBanner></AdoptBanner>
  <SearchBar ref="searchBar"></SearchBar>

  <div class="container mb-11 mb-lg-13">
    <StatusBar></StatusBar>
    <DataPanel></DataPanel>
    <DataPagination></DataPagination>
  </div>

  <a href="#" class="arrow-up position-fixed d-none">
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
  // computed: {
  //   ...mapState(adoptStore, ['adoptData', 'getUserName', 'INDEX_URL']),
  // },
  // methods: {
  //   ...mapActions(adoptStore, ['getProducts', 'fetchData']),
  // },
  // mounted() {
  //   console.log(this.INDEX_URL);
  //   this.fetchData(this.INDEX_URL);
  // },
};
</script>
