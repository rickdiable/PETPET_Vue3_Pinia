<template>
  <div
    class="d-flex justify-content-between font-m font-weight-md-bold"
  >
    <p v-if="filteredData.length !== 0" id="totalNum">當前檢索共有 {{ filteredData.length }} 個毛孩</p>
    <p v-else id="totalNum">當前檢索共有 {{ adoptData.length }} 個毛孩</p>
    <div class="d-flex" id="display-mode-container">
      <p>每頁顯示筆數:</p>
      <label for="a" class="ml-3 mr-10 d-flex">
        <select class="form-control form-control-sm" v-model="selectedOption"
        @change="changePerPage(this.selectedOption)">
          <option>4</option>
          <option>8</option>
          <option>12</option>
          <option>16</option>
        </select>
      </label>
      <div class="mr-5">
        <i class="fa fa-th fa-lg" ref="card-mode" aria-hidden="true"
        @click="switchRenderMode(true)" :class="{ 'text-warning': isCardMode }">
        </i>
      </div>
      <div>
        <i class="fa fa-bars fa-lg" ref="list-mode" aria-hidden="true"
        @click="switchRenderMode(false)" :class="{ 'text-warning': !isCardMode }">
        </i>
      </div>
    </div>
  </div>
  <div class="mb-7 mb-md-11">目前在第 {{ NOW_PAGE }} 頁</div>
</template>

<style lang="scss" scoped>
#display-mode-container {
  div {
    cursor: pointer;
  }
}
</style>

<script>
import adoptStore from '@/stores/adoptStore';
import paginationStore from '@/stores/paginationStore';
import { mapState, mapActions } from 'pinia';

export default {
  data() {
    return {
      selectedOption: 12,
    };
  },
  computed: {
    ...mapState(adoptStore, ['adoptData', 'isCardMode', 'filteredData']),
    ...mapState(paginationStore, ['NOW_PAGE']),
  },
  methods: {
    ...mapActions(adoptStore, ['switchRenderMode', 'changePerPage']),
  },
};
</script>
