<template>
  <div class="container">
    <div class="row py-11 py-lg-13">
      <SideBar></SideBar>
      <PicCarousel></PicCarousel>
      <DetailIntro></DetailIntro>
      <CustomComments></CustomComments>
      <OtherStore></OtherStore>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/detail/SideBar.vue';
import PicCarousel from '@/components/detail/PicCarousel.vue';
import DetailIntro from '@/components/detail/DetailIntro.vue';
import CustomComments from '@/components/detail/CustomComments.vue';
import OtherStore from '@/components/detail/OtherStore.vue';

export default {
  name: 'detailView',
  components: {
    SideBar,
    PicCarousel,
    DetailIntro,
    CustomComments,
    OtherStore,
  },
};
</script>
