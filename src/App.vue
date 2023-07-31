<template>
  <NavbarMain></NavbarMain>
  <router-view />
  <FooterMain v-if="!$route.meta.hideFooter"></FooterMain>
</template>

<script>
import NavbarMain from '@/components/NavbarMain.vue';
import FooterMain from '@/components/FooterMain.vue';

export default {
  components: {
    NavbarMain,
    FooterMain,
  },
};
</script>

<!-- <style lang="scss" scoped></style> -->
