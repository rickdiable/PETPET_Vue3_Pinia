<template>
  <section id="section-intro" class="section-swiper mb-11 mb-md-13">
    <div class="container">
      <h3 class="font-xxl mb-1">本月熱門保姆</h3>
      <p class="font-m mb-3">即時瞭解您的需求，安排最適合毛孩的寵物保姆！</p>
    </div>
    <!-- swiper start-->
    <div class="position-relative d-none d-lg-block">
      <div class="swiper-container pb-2">
        <div class="swiper-wrapper">
          <!-- single card start -->
          <div v-for="(card, index) in cards" :key="index" class="swiper-slide">
            <div class="card shadow-sm p-1">
              <div :style="`background: url(${card.image}) center 60% / cover`"
              class="card-top-img-height"></div>
              <div class="card-body text-center position-relative pt-11 pb-7">
                <img :src="card.personImage" class="card-img-circle" :alt="card.personName" />
                <h4 class="font-m font-weight-normal mb-1">{{ card.personName }}</h4>
                <p class="mb-3">{{ card.services }}</p>
                <a :href="card.link" class="btn btn-secondary py-3 px-12 mb-6">預約</a>
                <div class="row no-gutters">
                  <div class="col">
                    <p class="mb-3">獲得評價</p>
                    <span class="align-middle font-xl font-weight-bold">{{ card.reviews }}</span>
                    <span class="align-middle font-s">則</span>
                  </div>
                  <div class="col">
                    <p class="mb-3">已完成訂單</p>
                    <span class="align-middle font-xl font-weight-bold">{{ card.completedOrders }}
                    </span>
                    <span class="align-middle font-s">件</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next">
        <span class="material-icons">play_circle_filled</span>
      </div>
      <div class="swiper-button-prev"></div>
    </div>
    <!-- swiper end -->

    <div class="container">
      <ul class="row d-flex d-lg-none">
        <li v-for="(card, index) in cards" :key="index" class="col-md-4 mb-3 mb-md-3">
          <div class="card shadow-sm p-1">
            <div :style="{ background: `url('${card.image}') center 60% / cover` }"
            class="card-top-img-height"></div>
            <div class="card-body text-center position-relative pt-11 pb-7">
              <img :src="card.personImage" class="card-img-circle" :alt="`person pic ${index}`" />
              <h4 class="font-m font-weight-normal mb-1">{{ card.personName }}</h4>
              <p class="mb-3">{{ card.services }}</p>
              <a :href="card.link" class="btn btn-secondary py-3 px-12 mb-6">預約</a>
              <div class="row no-gutters">
                <div class="col">
                  <p class="mb-3">獲得評價</p>
                  <span class="align-middle font-xl font-weight-bold">{{ card.reviews }}</span>
                  <span class="align-middle font-s">則</span>
                </div>
                <div class="col">
                  <p class="mb-3">已完成訂單</p>
                  <span class="align-middle font-xl font-weight-bold">{{ card.completedOrders }}
                  </span>
                  <span class="align-middle font-s">件</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "@/assets/scss/helpers/variables";
@import '@/assets/scss/vendors/swiper';
</style>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: '/assets/images/index-2.jpeg',
          personImage: '/assets/images/person-1.png',
          personName: 'Jamie',
          services: '寄宿、美容、寵物行為訓練',
          link: '#',
          reviews: 198,
          completedOrders: 580,
        },
        {
          image: '/assets/images/index-3.jpeg',
          personImage: '/assets/images/person-2.png',
          personName: 'Eric',
          services: '寄宿、美容',
          link: '#',
          reviews: 76,
          completedOrders: 208,
        },
        {
          image: '/assets/images/index-4.jpeg',
          personImage: '/assets/images/person-3.png',
          personName: 'Yvonne',
          services: '寄宿、美容、寵物行為訓練',
          link: '#',
          reviews: 52,
          completedOrders: 196,
        },
        {
          image: '/assets/images/index-2.jpeg',
          personImage: '/assets/images/person-1.png',
          personName: 'Jamie',
          services: '寄宿、美容、寵物行為訓練',
          link: '#',
          reviews: 198,
          completedOrders: 580,
        },
        {
          image: '/assets/images/index-3.jpeg',
          personImage: '/assets/images/person-2.png',
          personName: 'Eric',
          services: '寄宿、美容',
          link: '#',
          reviews: 76,
          completedOrders: 208,
        },
        {
          image: '/assets/images/index-4.jpeg',
          personImage: '/assets/images/person-3.png',
          personName: 'Yvonne',
          services: '寄宿、美容、寵物行為訓練',
          link: '#',
          reviews: 52,
          completedOrders: 196,
        },
      ],
    };
  },
  mounted() {
    /* eslint-disable */
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      // Swiper 選項和配置
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  },
};
</script>
