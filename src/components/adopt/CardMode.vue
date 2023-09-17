<template>
  <!-- 圖卡式介面 -->
  <ul id="displayCard" class="row card-group mb--3 mb-md--5 mb-lg--8 vld-parent">
  <LoadingOverlay :active="isLoading" :is-full-page="fullPage"></LoadingOverlay>
    <li
      class="card-group-item col-6 col-md-4 col-lg-3 mb-10 hvr-bob"
      v-for="card in pageData"
      :key="card.animal_id"
    >
      <div class="card shadow bg-gray-100">
        <h4 class="text-center bg-warning">{{ card.animal_id }}</h4>
        <div
          class="custom-adopt-card-img-top"
          :style="{ background: `url(${card.album_file})no-repeat 50% 50% / contain` }">
        </div>
        <ul class="card-body py-3 px-3 px-lg-4">
          <li class="mb-1"><span class="font-weight-bold">類別: </span>{{ card.animal_kind }}</li>
          <li class="mb-1"><span class="font-weight-bold">毛色: </span>{{ card.animal_colour }}</li>
          <li class="mb-1"><span class="font-weight-bold">性別: </span>{{ card.animal_sex }}</li>
          <li class="mb-1">
            <span class="font-weight-bold">來源: </span>{{ card.animal_foundplace }}
          </li>
          <li class="mb-1">
            <span class="font-weight-bold">我在: </span>
            <p class="d-block">{{ card.animal_place }}</p>
          </li>
        </ul>
        <div class="bg-white d-flex mt-auto">
          <a
            href="#"
            data-toggle="modal"
            data-target="#adopt-modal"
            class="d-flex justify-content-center align-items-center card-link w-50 py-3"
            @click="fetchModal(card.animal_id)"
          >
            <p>詳細資料</p>
          </a>
          <a href="#" class="card-link w-50 text-center text-secondary py-3"
          @click.prevent="noFunctionBtn">
            <p>我有意願認養</p>
          </a>
        </div>
      </div>
    </li>
  </ul>
  <!-- 圖卡式介面 -->
</template>

<script>
import adoptStore from '@/stores/adoptStore';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(adoptStore, ['pageData', 'filteredData', 'isLoading', 'fullPage']),
  },
  methods: {
    ...mapActions(adoptStore, ['fetchModal', 'noFunctionBtn']),
  },
};
</script>
