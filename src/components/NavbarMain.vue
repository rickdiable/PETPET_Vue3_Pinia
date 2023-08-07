<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white sticky-top"
  :class="{ 'shadow-sm': isScrolled }">
    <div class="container-fluid container-md">
      <h1>
        <router-link to="/" class="navbar-logo">PETPET</router-link>
      </h1>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/adopt" class="nav-link">領養毛孩</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/detail" class="nav-link">預約服務</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!isMemberPage" to="/memberlogin" class="nav-link">成為寵物保姆
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!isMemberPage" to="/login" class="nav-link">登入</router-link>
          </li>

          <li v-if="isMemberPage" class="nav-item">
            <div class="dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
              data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Hi, Joanne
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">會員資料</a>
                <a class="dropdown-item" href="#">預約查詢</a>
                <a class="dropdown-item" href="#">歷史預約</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-secondary" href="#">切換保母帳號</a>
                <a class="dropdown-item" href="#">登出</a>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMemberPage: false, // 預設為一般頁面用的 Navbar
      isScrolled: false,
    };
  },
  created() {
    // 使用 beforeEach 導航守衛監聽路由變化
    this.$router.beforeEach((to, from, next) => {
      // 判斷目標路由是否為 member 頁面
      this.isMemberPage = to.path === '/memberPage'; // 修改判斷條件
      next(); // 放行，進入目標路由
    });
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // 一開始就先執行一次，確保正確設置初始值
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.pageYOffset > this.$el.offsetHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/all.scss';
.navbar-logo {
  background: url('~@/assets/images/logo.svg') no-repeat;
  display: block;
  width: 122px;
  height: 55px;
  font-size: 0;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
  @include media-breakpoint-down(sm) {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.navbar-collapse {
  flex-grow: 0;
}

.navbar-nav {
  .nav-link {
    @include media-breakpoint-down(sm) {
      text-align: center;
      border-bottom: 1px solid $light;
    }
    @include media-breakpoint-up(md) {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
  .nav-item:last-child .nav-link {
    padding-right: 0;
  }
}

.navbar-toggler {
  position: relative;
  width: 64px;
  height: 64px;
  border: none;
  // outline: none;
  &:focus,
  &:active,
  &-icon:focus {
    outline: none;
    // box-shadow: none;
  }
  &.collapsed {
    .navbar-toggler-icon {
      background-color: $warning;
    }
    .navbar-toggler-icon:before,
    .navbar-toggler-icon:after {
      transform: rotate(0deg);
    }
    .navbar-toggler-icon:before {
      top: 18px;
    }
    .navbar-toggler-icon:after {
      top: 40px;
    }
  }
}

.navbar-toggler-icon {
  display: block;
  width: 36px;
  height: 4px;
  background: none;
  margin: auto;
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 36px;
    height: 4px;
    background-color: $warning;
    top: 30px;
    transition: all 0.2s;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}

.navbar {
  transition: 0.5s;
}
</style>
