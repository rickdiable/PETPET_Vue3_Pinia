<template>
  <div class="order-4 col-md-12 col-lg-6 offset-lg-6 mb-9 mb-md-11 mb-lg-13">
    <h3 class="font-xl mb-6">飼主評論（30）</h3>
    <ul class="row mb--5">
      <li v-for="(comment, index) in comments" :key="index" class="col-md-6 mb-5">
        <div class="card flex-row justify-content-center
        align-items-center border-2 border-light py-4 px-4">
          <img :src="comment.avatar" alt="petpet detail avatar" />
          <div class="card-body ml-5">
            <p class="mb-3">
              {{ comment.name }}
              <span class="font-s text-primary-lighten ml-2">{{ comment.date }}</span>
            </p>
            <ul class="d-flex text-warning mb-1 mb-md-2">
              <li v-for="star in comment.rating" :key="star">
                <span class="material-icons">star</span>
              </li>
            </ul>
            <p>{{ comment.content }}</p>
          </div>
        </div>
      </li>
    </ul>
    <a href="#" class="font-m text-right mt-2">查看更多</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        {
          name: '葉子',
          avatar: '/assets/images/person-4.png',
          date: 'Oct 17 2020',
          rating: 5,
          content: '服務很秋！',
        },
        {
          name: 'Joanne',
          avatar: '/assets/images/person-5.png',
          date: 'Oct 17 2020',
          rating: 5,
          content: '貓完全不想回家了。',
        },
        {
          name: 'Ray',
          avatar: '/assets/images/person-6.png',
          date: 'Oct 17 2020',
          rating: 5,
          content: '超喜歡超棒超讚的...',
        },
        {
          name: '穎旻',
          avatar: '/assets/images/person-7.png',
          date: 'Oct 17 2020',
          rating: 5,
          content: '下次還會麻煩您～',
        },
        {
          name: '俊儀',
          avatar: '/assets/images/person-8.png',
          date: 'Oct 17 2020',
          rating: 5,
          content: '讚的！',
        },
        {
          name: '子琪',
          avatar: '/assets/images/person-4.png',
          date: 'Oct 17 2020',
          rating: 5,
          content: '服務很棒耶哈哈哈！',
        },
      ],
    };
  },
};
</script>
