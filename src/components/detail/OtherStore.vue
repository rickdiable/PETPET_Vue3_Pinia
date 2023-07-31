<template>
  <div class="order-5 col-md-12 col-lg-6 offset-lg-6 mb-md-11 mb-lg-13">
    <h3 class="font-xl mb-6">
      其他
      <span class="text-secondary"><u>高雄市</u></span>
      <span class="text-secondary"><u> 寄宿</u></span>
      的寵物保姆
    </h3>
    <ul class="row">
      <li v-for="(store, index) in stores" :key="index" class="col-6 col-md-4 mb-3 mb-md-4 mb-lg-2">
        <div class="card shadow-sm bg-gray-100">
          <a :href="'#store-' + index">
            <div class="custom-card-img-top"
            :style="'background: url(' + store.imgUrl + ') 50% 50% / cover'"></div>
            <div class="card-body py-2 px-4 px-md-3">
              <p class="mb-1">{{ store.name }}</p>
              <ul class="d-flex text-warning mb-1">
                <li v-for="star in store.rating" :key="star">
                  <span class="font-s material-icons">star</span>
                </li>
              </ul>
              <p class="font-s mb-4">{{ store.services }}</p>
            </div>
          </a>
          <div class="d-flex bg-white d-md-none mt-auto">
            <a class="card-link w-50 text-center py-3"
            :href="'#contact-' + index">聯繫</a>
            <a class="card-link w-50 text-center
            text-secondary py-3" :href="'#reserve-' + index">預約</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stores: [
        {
          name: '寵屋屋',
          imgUrl: '/assets/images/homestay-2.jpeg',
          rating: 4,
          services: '寄宿、美容洗澡、到府保姆',
        },
        {
          name: '毛孩好家',
          imgUrl: '/assets/images/homestay-6.jpeg',
          rating: 5,
          services: '寄宿、美容洗澡、到府保姆',
        },
        {
          name: '妖貓X僕SS',
          imgUrl: '/assets/images/homestay-4.jpeg',
          rating: 5,
          services: '寄宿、美容洗澡',
        },
        {
          name: '貓是主我是僕',
          imgUrl: '/assets/images/homestay-5.jpeg',
          rating: 5,
          services: '寄宿、美容洗澡、到府保姆',
        },
        {
          name: '汪汪隊',
          imgUrl: '/assets/images/homestay-6.jpeg',
          rating: 5,
          services: '寄宿、到府保姆、寵物行為訓練',
        },
        {
          name: '卯咪',
          imgUrl: '/assets/images/homestay-7.jpeg',
          rating: 4,
          services: '寄宿、寵物行為訓練',
        },
        // 其他寵物屋資訊
      ],
    };
  },
};
</script>
