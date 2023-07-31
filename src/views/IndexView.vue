<template>
  <IndexBanner ref="indexBanner" />
  <IndexRecommend ref="indexRecommend" />
  <IndexIntropics />
  <IndexDiagram />
  <IndexProcess />
</template>

<script>
// @ is an alias to /src
import IndexBanner from '@/components/index/IndexBanner.vue';
import IndexRecommend from '@/components/index/IndexRecommend.vue';
import IndexIntropics from '@/components/index/IndexIntropics.vue';
import IndexDiagram from '@/components/index/IndexDiagram.vue';
import IndexProcess from '@/components/index/IndexProcess.vue';

export default {
  name: 'indexView',
  components: {
    IndexBanner,
    IndexRecommend,
    IndexIntropics,
    IndexDiagram,
    IndexProcess,
  },
};
</script>
