import { createRouter, createWebHashHistory } from 'vue-router';
// import adoptStore from '@/stores/adoptStore';
import IndexView from '../views/IndexView.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/DetailView.vue'),
  },
  {
    path: '/adopt',
    name: 'adopt',
    component: () => import('../views/AdoptView.vue'),
    // router guard fetch
    // async beforeEnter() {
    //   await adoptStore().fetchData();
    // },
    meta: {
      title: 'PETPET | 領養毛孩',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { hideFooter: true }, // 設置 meta 屬性，表示不顯示 footer
  },
  {
    path: '/memberlogin',
    name: 'memberlogin',
    component: () => import('../views/MemberLogin.vue'),
    meta: { hideFooter: true }, // 設置 meta 屬性，表示不顯示 footer
  },
  {
    path: '/memberPage', // 子路由的路徑，完整路徑是 /memberLogin/member
    name: 'member',
    component: () => import('../views/MemberView.vue'), // 使用 Member 元件
    meta: { hideFooter: true }, // 設置 meta 屬性，表示不顯示 footer
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'PETPET | 毛孩好家';
  }
  next();
});

export default router;
