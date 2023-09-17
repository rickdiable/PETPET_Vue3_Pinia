<template>
  <!-- 清單式界面 -->
  <div class="container pt-3 d-md-none" id="displayListSmall">
    <div
      class="row d-flex justify-content-center align-items-center border-top py-2"
      v-for="item in pageData"
      :key="item.animal_id"
    >
      <div
        class="col-3 table-adopt-img"
        :style="{ background: `url(${item.album_file})no-repeat 50% 50% / contain` }"
      ></div>
      <ul class="col-6">
        <li><span class="font-weight-bold">類別: </span>{{ item.animal_kind }}</li>
        <li><span class="font-weight-bold">毛色: </span>{{ item.animal_colour }}</li>
        <li><span class="font-weight-bold">性別: </span>{{ item.animal_sex }}</li>
        <li>
          <span class="font-weight-bold">我在: </span>
          <span>{{ item.shelter_name }}</span>
        </li>
      </ul>
      <div class="col-3">
        <div class="bg-white d-flex align-items-center row">
          <a
            href="#"
            data-toggle="modal"
            data-target="#adopt-modal"
            class="col-12 btn btn-warning mb-1"
            @click="fetchModal(item.animal_id)"
            >看詳細</a
          >
          <a href="#" class="btn btn-block btn-secondary col-12">欲認養</a>
        </div>
      </div>
    </div>
  </div>

  <table class="table text-center table-adopt-sm-d-none">
    <thead>
      <tr class="bg-warning">
        <th class="border-bottom-0" scope="col"></th>
        <th class="border-bottom-0" scope="col">類別</th>
        <th class="border-bottom-0" scope="col">毛色</th>
        <th class="border-bottom-0" scope="col">性別</th>
        <th class="border-bottom-0" scope="col">來源</th>
        <th class="border-bottom-0" scope="col"></th>
      </tr>
    </thead>
    <tbody id="displayList">
      <tr
        v-for="item in pageData"
        :key="item.animal_id"
      >
        <th scope="row d-flex flex-column justify-content-center">
          <div
            class="table-adopt-img"
            :style="{ background: `url(${item.album_file})no-repeat 50% 50% / contain` }"
          ></div>
        </th>
        <td class="align-middle">{{ item.animal_kind }}</td>
        <td class="align-middle">{{ item.animal_colour }}</td>
        <td class="align-middle">{{ item.animal_sex }}</td>
        <td class="align-middle">{{ item.shelter_name }}</td>
        <td class="align-middle">
          <div class="bg-white d-flex align-items-center">
            <a
              href="#"
              data-toggle="modal"
              data-target="#adopt-modal"
              class="btn btn-warning w-50 mr-2"
              @click="fetchModal(item.animal_id)"
            >
              詳細資料
            </a>
            <a href="#" class="btn btn-block btn-secondary w-50" @click.prevent="noFunctionBtn">
              我有意願認養
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adoptStore from '@/stores/adoptStore';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(adoptStore, ['pageData', 'filteredData']),
  },
  methods: {
    ...mapActions(adoptStore, ['fetchModal', 'noFunctionBtn']),
  },
};
</script>
