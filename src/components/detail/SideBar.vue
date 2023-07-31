<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="order-2 order-md-1 col-md-7 col-lg-6 mb-9 mb-md-11 sticky-top-lg">
    <div class="d-flex align-items-center mb-4">
      <h2 class="font-xxl mr-4">毛孩好家</h2>
      <ul class="d-flex font-xxl text-warning">
        <li class="mr-1"><span class="material-icons">star</span></li>
        <li class="mr-1"><span class="material-icons">star</span></li>
        <li class="mr-1"><span class="material-icons">star</span></li>
        <li class="mr-1"><span class="material-icons">star</span></li>
        <li><span class="material-icons">star</span></li>
      </ul>
    </div>
    <h3 class="mb-2 font-md-m font-lg-l font-weight-normal font-weight-lg-bold">
      給予毛孩最舒適的環境是我們的職責！
    </h3>
    <p class="mb-11">已提供 52 筆服務、並獲得 30 個評價</p>
    <h3 class="mb-4 font-m">服務內容</h3>
    <ul class="mb-9">
      <li class="mb-2">寄宿 NT$ 450 /晚</li>
      <li class="mb-2">
        美容洗澡 NT$ 500 （含剪指甲、剃腳底毛、清耳朵）
        <p class="text-secondary font-s">個性貓另加價</p>
      </li>
      <li class="mb-2">到府保姆 NT$ 550 /晚</li>
    </ul>
    <div class="d-flex mb-11">
      <span class="material-icons text-secondary mr-3">location_on</span>
      <ul>
        <li>高雄市鹽埕區七賢三路123號</li>
        <li>服務區域：高雄市 全區</li>
      </ul>
    </div>
    <div class="row">
      <div class="col-6 col-md-5 col-lg-4 pr-2 pr-md-4">
        <a href="javascript:void(0)" class="btn btn-outline-secondary font-m py-2 w-100">聯繫</a>
      </div>
      <div class="col-6 col-md-5 col-lg-6 pl-2 pl-md-4">
        <a
          href="#"
          class="btn btn-secondary font-m py-2 w-100"
          data-toggle="modal"
          data-target="#reserve"
          >立刻預約
        </a>
      </div>
    </div>
  </div>

  <!-- modal reservation 1 -->
  <div
    class="modal fade"
    id="reserve"
    tabindex="-1"
    role="dialog"
    aria-labelledby="reservationTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content pt-4 pb-5 px-6 pt-md-11 pb-md-10 px-md-11 px-lg-8">
        <div class="modal-body d-flex flex-column">
          <h3 class="order-2 order-md-1 font-l mb-3 mb-md-6 mb-lg-8">預約項目</h3>
          <div class="order-3 order-md-2 d-flex d-lg-block position-lg-absolute right-lg-0">
            <img
              class="modal-img rounded mb-6"
              src="/assets/images/homestay-3.jpeg"
              alt="petpet 毛孩好家"
            />
            <div class="ml-3 ml-md-7 ml-lg-0">
              <div class="d-block d-md-flex align-items-center">
                <h4 class="font-m mb-0 mb-md-2">毛孩好家</h4>
                <ul class="d-flex text-warning ml-0 ml-md-2">
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                </ul>
              </div>
              <div class="d-flex">
                <span class="material-icons text-secondary mr-2 mr-md-3 mr-lg-2"
                  >location_on</span
                >
                <p>高雄市苓雅區、新興區、前鎮區</p>
              </div>
            </div>
          </div>

          <form class="order-4 order-md-3 text-black" action="#">
            <ul class="d-flex mb-6 mb-md-7">
              <li class="card bg-white mr-1 mr-sm-3">
                <label
                  class="card-label d-flex flex-column justify-content-center
                  align-items-center mb-0"
                  for="homestay"
                >
                  <input class="card-input d-none" type="checkbox" id="homestay" />
                  <span class="card-label-icon material-icons font-m font-sm-4xl mb-md-2"
                    >house</span
                  >
                  <p class="card-text font-md-m">寄宿</p>
                </label>
              </li>
              <li class="card bg-white mr-1 mr-sm-3">
                <label
                  class="card-label d-flex flex-column justify-content-center
                  align-items-center mb-0"
                  for="grooming"
                >
                  <input class="card-input d-none" type="checkbox" id="grooming" />
                  <span class="card-label-icon material-icons font-m font-sm-4xl mb-md-2"
                    >soap</span
                  >
                  <p class="card-text font-md-m">美容</p>
                </label>
              </li>
              <li class="card bg-white mr-1 mr-sm-3">
                <input class="card-input d-none" type="checkbox" id="take-care-home" />
                <label
                  class="card-label d-flex flex-column justify-content-center
                  align-items-center mb-0"
                  for="take-care-home"
                >
                  <span class="card-label-icon material-icons font-m font-sm-4xl mb-md-2"
                    >roofing</span
                  >
                  <p class="card-text font-md-m">到府保姆</p>
                </label>
              </li>
              <li class="card bg-white mr-1 mr-sm-3">
                <label
                  class="card-label d-flex flex-column justify-content-center
                  align-items-center mb-0"
                  for="walking-dog"
                >
                <input class="card-input d-none" type="checkbox" id="walking-dog" />
                  <span class="card-label-icon material-icons font-m font-sm-4xl mb-md-2"
                    >directions_walk</span
                  >
                  <p class="card-text font-md-m">遛狗保姆</p>
                </label>
              </li>
            </ul>

            <label for="reserve-date">選擇日期</label>
            <ul class="d-flex flex-wrap align-items-center mb-5">
              <li class="d-flex align-items-center">
                <input
                  class="form-control custom-input-width custom-form-mb"
                  type="date"
                  id="reserve-date"
                />
                <p class="mx-2">至</p>
              </li>
              <li class="d-flex align-items-center">
                <input class="form-control custom-input-width" type="date" />
                <p class="mx-2 white-space-nowrap">共 1 晚</p>
              </li>
            </ul>

            <div class="d-flex mb-9 mb-md-13 mb-lg-11">
              <div class="d-flex flex-column mr-7">
                <label for="pet-ages">數量</label>
                <select class="custom-select" name="petNumbers" id="pet-ages">
                  <option value="1">1 隻</option>
                  <option value="2">2 隻</option>
                  <option value="3">3 隻</option>
                  <option value="4">4 隻</option>
                  <option value="5">5 隻</option>
                  <option value="other">其他數量</option>
                </select>
              </div>

              <div class="d-flex flex-column mr-7">
                <label for="pet-type">您的寵物是</label>
                <select class="custom-select custom-select-width" name="petType" id="pet-type">
                  <option value="貓" selected>貓</option>
                  <option value="狗">狗</option>
                  <option value="天竺鼠">天竺鼠</option>
                  <option value="鳥類">鳥類</option>
                  <option value="other">其他種類</option>
                </select>
              </div>

              <div class="d-flex flex-column">
                <label for="pet-ages">年齡</label>
                <select class="custom-select custom-select-width" name="petAges" id="pet-ages">
                  <option value="1">1 歲</option>
                  <option value="2">2 歲</option>
                  <option value="3">3 歲</option>
                  <option value="4">4 歲</option>
                  <option value="5">5 歲</option>
                  <option value="6">6 歲</option>
                  <option value="7">7 歲</option>
                  <option value="other">超過 7 歲</option>
                </select>
              </div>
            </div>
          </form>

          <div class="order-1 order-md-4 row mb-3 mb-md-9 mb-lg-0">
            <div class="col col-lg-8 pr-lg-7">
              <ul class="d-flex text-black justify-content-around timeline">
                <li class="timeline-pointer">
                  <p class="mt-1 mt-md-2">預約項目</p>
                </li>
                <li class="timeline-pointer font-weight-light">
                  <p class="mt-1 mt-md-2">預約資料</p>
                </li>
                <li class="timeline-pointer font-weight-light">
                  <p class="mt-1 mt-md-2">付款資訊</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="order-5 row modal-btn-group">
            <a
              href="#"
              class="col-md-6 btn btn-block btn-close-hover text-center text-secondary
              d-block d-md-none py-3"
              data-toggle="modal"
              data-dismiss="modal"
              aria-label="close"
              >返回</a
            >
            <a
              href="#reserve-2"
              class="col-md-6 col-lg-4 offset-md-6 offset-lg-6 position-lg-absolute
              right-lg-0 bottom-lg-0
              btn btn-block btn-secondary py-3"
              data-toggle="modal"
              data-dismiss="modal"
              aria-label="next step"
              >下一步</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal reservation 2 -->
  <div
    class="modal fade"
    id="reserve-2"
    tabindex="-1"
    role="dialog"
    aria-labelledby="reservation-2-Title"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content pt-4 pb-5 px-6 pt-md-11 pb-md-10 px-md-11 px-lg-8">
        <div class="modal-body d-flex flex-column">
          <h3 class="order-2 order-md-1 font-l mb-3 mb-md-6 mb-lg-8">預約資料</h3>
          <div class="order-3 order-md-2 d-flex d-lg-block position-lg-absolute right-lg-0">
            <img
              class="modal-img rounded mb-6"
              src="/assets/images/homestay-3.jpeg"
              alt="petpet 毛孩好家"
            />
            <div class="ml-3 ml-md-7 ml-lg-0">
              <div class="d-block d-md-flex align-items-center">
                <h4 class="font-m mb-0 mb-md-2">毛孩好家</h4>
                <ul class="d-flex text-warning ml-0 ml-md-2">
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                </ul>
              </div>
              <div class="d-flex">
                <span class="material-icons text-secondary mr-2 mr-md-3 mr-lg-2"
                  >location_on</span
                >
                <p>高雄市苓雅區、新興區、前鎮區</p>
              </div>
            </div>
          </div>

          <form class="order-4 order-md-3 row mb-md-11 mb-lg-9" action="#">
            <div class="col-md-7 col-lg-4">
              <div class="mb-5">
                <label class="mb-1" for="pet-name">毛孩姓名</label>
                <input
                  class="form-control"
                  type="text"
                  id="pet-name"
                  placeholder="請輸入毛孩姓名"
                />
              </div>
              <div class="mb-5">
                <label class="mb-1" for="user-name">飼主姓名</label>
                <input
                  class="form-control"
                  type="text"
                  id="user-name"
                  placeholder="請輸入飼主姓名"
                />
              </div>
              <div class="mb-5">
                <label class="mb-1" for="email">Email</label>
                <input
                  class="form-control"
                  inputmode="email"
                  type="text"
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div class="mb-5">
                <label class="mb-1" for="tel">聯絡電話</label>
                <input
                  class="form-control"
                  inputmode="tel"
                  type="text"
                  id="tel"
                  placeholder="0912-345-678"
                />
              </div>
            </div>
          </form>

          <div class="order-1 order-md-4 row mb-3 mb-md-9 mb-lg-0">
            <div class="col col-lg-8 pr-lg-7">
              <ul class="d-flex text-black justify-content-around timeline">
                <li class="timeline-pointer font-weight-light">
                  <p class="mt-1 mt-md-2">預約項目</p>
                </li>
                <li class="timeline-pointer">
                  <p class="mt-1 mt-md-2">預約資料</p>
                </li>
                <li class="timeline-pointer font-weight-light">
                  <p class="mt-1 mt-md-2">付款資訊</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="order-5 row modal-btn-group position-lg-absolute right-lg-0 bottom-lg-0">
            <a
              href="#reserve"
              class="col-md-2 offset-md-4 col-lg-12 offset-lg-0 btn btn-block btn-close-hover
              text-center text-secondary d-block py-3"
              data-toggle="modal"
              data-dismiss="modal"
              aria-label="close"
              >返回</a
            >
            <a
              href="#reserve-3"
              class="col-md-6 col-lg-12 btn btn-block btn-secondary py-3"
              data-toggle="modal"
              data-dismiss="modal"
              aria-label="next step"
              >下一步</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal reservation 3 -->
  <div
    class="modal fade"
    id="reserve-3"
    tabindex="-1"
    role="dialog"
    aria-labelledby="reservation-3-Title"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content pt-4 pb-5 px-6 pt-md-11 pb-md-10 px-md-11 px-lg-8">
        <div class="modal-body d-flex flex-column">
          <h3 class="order-2 order-md-1 font-l mb-3 mb-md-6 mb-lg-8">付款資訊</h3>
          <div class="order-3 order-md-2 d-flex d-lg-block position-lg-absolute right-lg-0">
            <img
              class="modal-img rounded mb-6"
              src="/assets/images/homestay-3.jpeg"
              alt="petpet 毛孩好家"
            />
            <div class="ml-3 ml-md-7 ml-lg-0">
              <div class="d-block d-md-flex align-items-center">
                <h4 class="font-m mb-0 mb-md-2">毛孩好家</h4>
                <ul class="d-flex text-warning ml-0 ml-md-2">
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                  <li><span class="font-m material-icons">star</span></li>
                </ul>
              </div>
              <div class="d-flex">
                <span class="material-icons text-secondary mr-2 mr-md-3 mr-lg-2"
                  >location_on</span
                >
                <p>高雄市苓雅區、新興區、前鎮區</p>
              </div>
            </div>
          </div>

          <form class="order-4 order-md-3 row mb-13" action="#">
            <div class="col col-md-7 col-lg-5 mb-9 mb-md-13 mb-lg-10">
              <div class="mb-5">
                <label class="mb-1" for="credit-account">信用卡帳號</label>
                <input
                  class="form-control"
                  type="text"
                  id="credit-account"
                  placeholder="Xxxx-xxxx-xxxx-xxxx"
                />
              </div>
              <div class="mb-5">
                <label class="mb-1" for="credit-deadline">有效日期</label>
                <input
                  class="form-control"
                  type="text"
                  id="credit-deadline"
                  placeholder="(MM/YY)"
                />
              </div>
              <div class="mb-5">
                <label class="mb-1" for="credit-safecode">安全碼</label>
                <input
                  class="form-control"
                  type="text"
                  id="credit-safecode"
                  placeholder="***"
                />
              </div>
            </div>
          </form>

          <div class="order-1 order-md-4 row mb-3 mb-md-9 mb-lg-0">
            <div class="col col-lg-8 pr-lg-7">
              <ul class="d-flex text-black justify-content-around timeline">
                <li class="timeline-pointer font-weight-light">
                  <p class="mt-1 mt-md-2">預約項目</p>
                </li>
                <li class="timeline-pointer font-weight-light">
                  <p class="mt-1 mt-md-2">預約資料</p>
                </li>
                <li class="timeline-pointer">
                  <p class="mt-1 mt-md-2">付款資訊</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="order-5 row modal-btn-group position-lg-absolute right-lg-0 bottom-lg-0">
            <a
              href="#reserve-2"
              class="col-md-2 offset-md-4 col-lg-12 offset-lg-0 btn btn-block btn-close-hover
              text-center text-secondary d-block py-3"
              data-toggle="modal"
              data-dismiss="modal"
              aria-label="close"
              >返回</a
            >
            <a
              href="#reserve-success"
              class="col-md-6 col-lg-12 btn btn-block btn-secondary py-3"
              data-toggle="modal"
              data-dismiss="modal"
              aria-label="next step"
              >下一步</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal reservation successful -->
  <div
    class="modal fade"
    id="reserve-success"
    tabindex="-1"
    role="dialog"
    aria-labelledby="success-Title"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content pt-4 pb-5 px-6 pt-md-11 pb-md-10 px-md-11 px-lg-8">
        <div class="modal-body container d-flex flex-column py-13">
          <div class="row">
            <div class="col-12 text-center mb-4 mb-md-9">
              <span class="material-icons text-warning mb-5 custom-font-size-80">pets</span>
              <h2 class="font-l mb-3">預約成功</h2>
              <p class="text-left text-md-center">
                您可以在會員頁找到您的預約資料並修改或取消預約。
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a class="btn btn-block btn-secondary" href="member.html">前往會員頁</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
