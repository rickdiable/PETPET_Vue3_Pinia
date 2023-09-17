<template>
  <!-- modal -->
  <div
  class="modal fade"
  id="adopt-modal"
  tabindex="-1"
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
  >
    <div class="modal-dialog modal-lg container">
      <div class="modal-content px-6 px-md-9 px-lg-8 py-6">
        <div class="modal-body" id="adopt-modal-body">
          <div class="d-flex justify-content-between align-items-center">
            <LoadingOverlay :active="isLoading" :is-full-page="fullPage"></LoadingOverlay>
            <h5 class="modal-title font-l mb-5" id="adopt-modal-title">
              認養動物資料
            </h5>
            <a
              href="#"
              class="btn btn-outline-warning"
              data-toggle="modal"
              data-dismiss="modal"
              aria-label="close"
              >回上一頁</a
            >
          </div>
          <div class="row modal-api" v-for="item in modalData" :key="item.animal_id">
            <div class="col-12 d-flex justify-content-center align-items-center">
              <!-- <img src="./assets/images/loading.gif" alt="loadingImg" /> -->
            </div>
            <div
              class="d-flex flex-column justify-content-center bg-gray-100 col-12
              col-md-6 mb-3 mb-md-0 shadow modal-adopt-img-container"
            >
              <div
                class="modal-adopt-img-height"
                id="adopt-modal-img"
                :style="{ background: `url(${item.album_file})no-repeat 50% 50% / contain` }"
              ></div>
            </div>
            <div
              class="col-12 col-md-5 ml-3 d-flex flex-column justify-content-center
              font-s font-md-base"
            >
              <ul>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">入所天數: </span>{{ item.animal_inShelter }} 天
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">入所日期: </span
                  ><em>{{ item.animal_createtime }}</em>
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">尋獲地: </span>
                  {{ item.animal_foundplace }}
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1"></span>
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">流水編號: </span>{{ item.animal_id }}
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">收容編號: </span>{{ item.animal_subid }}
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">動物品種: </span>{{ item.animal_kind }}
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">性別: </span>{{ item.animal_sex }}
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">毛色: </span>{{ item.animal_colour }}
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">體型: </span>{{ item.animal_bodytype }}
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">是否絕育: </span>{{ item.animal_sterilization }}
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1"></span>
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">所在收容所: </span
                  >{{ item.shelter_name }}
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">收容所電話: </span>{{ item.shelter_tel }}
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">收容所地址: </span
                  >{{ item.shelter_address }}
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1"></span>
                </li>
                <li class="mb-1">
                  <span class="font-weight-bold mr-1">備註: </span
                  >{{ item.animal_remark }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adoptStore from '@/stores/adoptStore';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(adoptStore, ['modalData', 'isLoading', 'fullPage']),
  },
  methods: {
    ...mapActions(adoptStore, ['fetchModal']),
  },
  mounted() {
    // this.fetchData(this.INDEX_URL);
  },
};
</script>
