<template>
  <div class="container-fluid bg-warning py-4 mb-11 mb-lg-13">
    <form id="searchForm" class="form-row align-items-center" action="#">
      <h3 class="font-m mb-2 col-12">
        請輸入查詢條件<span class="font-s font-weight-light">
          *可用單一條件查詢</span
        >
      </h3>
      <label class="col-7 col-md-3 col-lg-2 mb-2 mb-lg-0" for="option1">
        <select id="animalKind" class="custom-select" v-model="filters.animal_kind"
        @change="filterColourAndShelter">
          <option selected>- 動物類別 -</option>
          <option v-for="item in filtersList.animal_kind" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </label>

      <label class="col-7 col-md-3 col-lg-2 mb-2 mb-lg-0" for="option2">
        <select id="animalColour" class="custom-select" v-model="filters.animal_colour">
          <option selected>- 動物毛色 -</option>
          <option v-for="item in filtersList.animal_colour" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </label>

      <label
        class="col-9 col-md-5 offset-md-1 col-lg-3 offset-lg-0 mb-2 mb-lg-0"
        for="option3"
      >
        <select id="shelterName" class="custom-select" v-model="filters.shelter_name">
          <option selected>- 收容所 -</option>
          <option v-for="item in filtersList.shelter_name" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </label>

      <div class="col-10 col-md-5 col-lg-2 mb-2 mb-lg-0">
        <input
          id="animalId"
          class="form-control mt-0"
          type="text"
          placeholder="- 以流水編號查詢 -"
          v-model="filters.animal_id"
        />
      </div>

      <div class="col-12 col-md-5 offset-md-2 col-lg-3 offset-lg-0 text-right">
        <a
          href="#"
          class="btn-search-cancel btn btn-primary-lighten col-4 col-md-5 col-lg-4
          white-space-nowrap mr-2" @click.prevent="resetSearch"
          >重置</a
        >
        <a
          href="#"
          class="btn-search btn btn-secondary
          col-4 col-md-5 col-lg-4 white-space-nowrap"
          @click.prevent="searchForm"
          >
          查詢
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import adoptStore from '@/stores/adoptStore';
import { mapActions, mapState } from 'pinia';

export default {
  computed: {
    ...mapState(adoptStore, ['filtersList', 'filters']),
  },
  methods: {
    ...mapActions(adoptStore, ['searchForm', 'resetSearch', 'filterColourAndShelter']),
  },
};
</script>
