<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <section class="banner">
    <div class="banner-img d-none d-lg-block custom-min-vh"></div>
    <div class="container py-11 py-lg-0">
      <div class="row banner-txt justify-content-center align-items-center custom-min-vh">
        <div class="col-lg-7 offset-lg-5 col-md-8">
          <h2 class="font-xxl mb-6 mb-md-11">登入</h2>

          <form class="needs-validation" @submit.prevent="submitForm" novalidate>
            <div class="form-group">
              <label for="userEmail" class="mb-2">電子信箱</label>
              <input type="email" class="form-control font-m font-weight-light" id="userEmail"
              placeholder="example@gmail.com" required>
              <div class="invalid-feedback">請輸入您的電子信箱</div>
            </div>
            <div class="form-group">
              <label for="userPassword" class="mb-2 d-none d-sm-block">密碼</label>
              <input type="password" class="form-control font-m font-weight-light" id="userPassword"
              placeholder="請輸入密碼" required>
              <div class="invalid-feedback">請重新確認密碼</div>
              <a href="#" class="font-s text-dark mt-1">忘記密碼</a>
            </div>
            <div class="custom-control custom-checkbox mb-7">
              <input type="checkbox" class="custom-control-input" id="customCheck1">
              <label class="custom-control-label" for="customCheck1">記住我的帳號</label>
            </div>
            <ul class="form-row mb-9">
              <li class="col-md-6 mb-3 mb-lg-0">
                <a href="#" class="btn btn-outline-light text-dark d-flex justify-content-center
                align-items-center py-1">
                  <img src="@/assets/images/facebook.svg" alt="facebook">facebook
                </a>
              </li>
              <li class="col-md-6 mb-3 mb-lg-0">
                <a href="#" class="btn btn-outline-light text-dark d-flex justify-content-center
                align-items-center py-1">
                  <img src="@/assets/images/google.svg" alt="google">google
                </a>
              </li>
            </ul>
            <div class="form-row">
              <div class="col-lg-5">
                <!-- <button type="submit" class="btn btn-secondary
                  btn-block font-m mb-2">登入</button> -->
                <LoginButton :fakeLogin="false"></LoginButton>
                <a href="#" class="text-secondary">還沒註冊嗎？</a>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoginButton from '@/components/login/LoginButton.vue';

export default {
  name: 'LoginView',
  components: {
    LoginButton,
  },
  mounted() {
    this.applyValidationStyles();
  },
  methods: {
    applyValidationStyles() {
      const forms = document.getElementsByClassName('needs-validation');
      Array.from(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        });
      });
    },
    submitForm() {
      // ...
    },
  },
};
</script>
