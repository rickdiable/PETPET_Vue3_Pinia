<template>
  <div class="container custom-min-vh py-13 d-flex flex-column justify-content-center">
    <div class="row align-items-center">
      <div class="col-md-6 col-lg-5 offset-lg-1">
        <div class="d-flex align-items-center mb-9 mb-">
          <h2 class="font-xxl">會員資料</h2>
          <a href="#">
            <span class="material-icons ml-2">create</span>
          </a>
        </div>
        <div class="d-flex align-items-center mb-9">
          <img src="@/assets/images/person-4.png" class="custom-avatar-size mr-4"
          alt="member avatar">
          <h3 class="font-m">Joanne</h3>
        </div>
        <table class="table table-borderless">
          <tbody>
            <tr class="row mb-5">
              <th class="font-weight-normal text-black col-4 col-lg-3 py-0" scope="row">電子信箱</th>
              <td class="py-0">cycample@gmail.com</td>
            </tr>
            <tr class="row mb-5">
              <th class="font-weight-normal text-black col-4 col-lg-3 py-0" scope="row">聯絡電話</th>
              <td class="py-0">0912-345-789</td>
            </tr>
            <tr class="row mb-5">
              <th class="font-weight-normal text-black col-4 col-lg-3 py-0" scope="row">性別</th>
              <td class="py-0">女</td>
            </tr>
            <tr class="row">
              <th class="font-weight-normal text-black col-4 col-lg-3 py-0" scope="row">聯絡地址</th>
              <td class="py-0">高雄市鹽埕區七賢三路123號</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-md-6">
        <h4 class="font-l font-lg-xxl mb-8">Hi, Joanne
          <br>喜歡我們提供的服務嗎？
          <br class="white-space-nowrap">現在你也可以成為寵物保姆囉
        </h4>

        <div>
          <a href="#" class="btn btn-block btn-secondary font-m py-2">成為寵物保姆</a>
        </div>
      </div>
    </div>
  </div>
</template>
