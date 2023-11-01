<template>
  <div id="dataPanel">
    <CardMode v-if="isCardMode"></CardMode>
    <ListMode v-else></ListMode>
  </div>
  <DetailModal></DetailModal>
</template>

<script>
import adoptStore from '@/stores/adoptStore';
import { mapState, mapActions } from 'pinia';

import CardMode from '@/components/adopt/CardMode.vue';
import ListMode from '@/components/adopt/ListMode.vue';
import DetailModal from '@/components/adopt/DetailModal.vue';

export default {
  components: {
    CardMode,
    ListMode,
    DetailModal,
  },
  computed: {
    ...mapState(adoptStore, ['isCardMode', 'isLoading']),
  },
  methods: {
    ...mapActions(adoptStore, ['fetchData']),
  },
  created() {
    this.fetchData();
  },
};
</script>
