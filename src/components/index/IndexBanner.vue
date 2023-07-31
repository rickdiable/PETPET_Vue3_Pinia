<template>
  <header class="banner mb-11 mb-md-13">
    <div class="banner-img custom-min-vh"></div>
    <div class="container position-relative">
      <div class="banner-txt row align-items-center justify-content-center custom-min-vh">
        <div class="col-md-7 offset-lg-5 text-center text-md-left">
          <h2 class="font-xl font-md-xxl font-lg-4xl mb-1 mb-md-2 mb-lg-4" data-aos="fade-down">
            寵物服務，盡在 PETPET
          </h2>
          <h3
            class="font-m font-lg-l font-weight-normal font-weight-lg-bold mb-3 mb-md-5 mb-lg-10"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            當您的毛孩有需要時，
            <br class="d-block d-lg-none" data-aos="fade-down" />幫您找到最合適的服務者！
          </h3>
          <form data-aos="fade-down" data-aos-delay="600">
            <label class="input-group d-block d-lg-flex" for="abc">
              <select class="custom-select font-m h-auto py-2 mb-4 mb-md-3 mb-lg-0">
                <option selected>品種</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select class="custom-select font-m h-auto py-2 mb-4 mb-md-3 mb-lg-0">
                <option selected>服務</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select class="custom-select font-m h-auto py-2 mb-3 mb-md-4 mb-lg-0">
                <option selected>地區</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div class="input-group-append">
                <button
                  class="btn btn-block btn-secondary custom-btn-rounded font-m px-md-7"
                  type="button"
                >
                  搜尋
                </button>
              </div>
            </label>
          </form>
        </div>
      </div>
      <a
        class="link-arrow position-absolute d-none d-sm-block"
        @click.prevent="scrollToNextElement"
        @keydown="handleKeyboardEvent"
        tabindex="0"
      >
        <span class="link-arrow-icon material-icons animate__animated animate__shakeY"
          >arrow_drop_down_circle</span
        >
      </a>
    </div>
  </header>
</template>

<style>
.custom-select {
  background: #fff url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5"%3e%3cpath fill="%23343a40" d="M2 0L0 2h4zm0 5L0 3h4z"/%3e%3c/svg%3e') no-repeat right 0.75rem center/8px 10px;
}

.link-arrow {
  cursor: pointer;
}
</style>

<script>
export default {
  methods: {
    scrollToNextElement() {
      // 使用 $refs 獲取下一個元件的參考
      const nextElementRef = this.$parent.$refs.indexRecommend; // 這裡假設 indexRecommend 是下一個元件

      if (nextElementRef) {
        // 滾動到下一個元件的頂部
        nextElementRef.$el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleKeyboardEvent() {
      // 空方法
    },
  },
};
</script>
