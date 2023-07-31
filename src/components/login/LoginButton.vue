<template>
  <!-- <button type="submit" class="btn btn-secondary btn-block font-m mb-2">登入</button> -->
  <button v-if="fakeLogin" @click="toMemberPage" class="btn btn-secondary btn-block
  font-m mb-2">模擬登入</button>
  <button v-else type="submit" @click="doNothing" class="btn btn-secondary
  btn-block font-m mb-2">一般按鈕</button>
</template>

<script>

export default {
  props: {
    fakeLogin: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toMemberPage() {
      this.$router.push({ name: 'member' });
    },
    doNothing() {
      // do nothing
    },
  },
};
</script>
