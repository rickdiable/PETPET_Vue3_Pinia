/* eslint-disable */
import { defineStore } from 'pinia';
import axios from 'axios';
import paginationStore from '@/stores/paginationStore';

const usePaginationStore = paginationStore();

export default defineStore('adoptStore', {
  state: () => ({
    name: '小美',
    adoptData: [],
    pageData: [],
    filteredData: [],
    modalData: null,
    BASE_URL: 'https://data.coa.gov.tw',
    INDEX_URL: 'https://data.coa.gov.tw/api/v1/AnimalRecognition/',
    MODAL_URL: 'https://data.coa.gov.tw/api/v1/AnimalRecognition/?animal_id=',
    isCardMode: true,
    isLoading: false,
    fullPage: false,
    // 存放動態更新的篩選器選項
    filtersList: {
      animal_kind: [],
      animal_colour: [],
      shelter_name: [],
    },
    // 綁定選中的選項
    filters: {
      animal_kind: '- 動物類別 -',
      animal_colour: '- 動物毛色 -',
      shelter_name: '- 收容所 -',
      animal_id: '',
    },
    // INDEX_URL: `${this.BASE_URL}/api/v1/AnimalRecognition/`,
    // MODAL_URL: `${this.INDEX_URL}?animal_id=`,
  }),
  // getters: {
  //   INDEX_URL(state) {
  //     // return `${state.BASE_URL}/api/v1/AnimalRecognition/?shelter_name=新北市八里區公立動物之家`;
  //     return `${state.BASE_URL}/api/v1/AnimalRecognition/`;
  //   },
  //   MODAL_URL(getters) {
  //     return `${getters.INDEX_URL}?animal_id=`;
  //   },
  // },
  actions: {
    // 打 API 取得數據面板資料
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await axios.get(this.INDEX_URL);
        // this.adoptData = response.data.Data.slice(0, 30);
        this.adoptData = response.data.Data;
        this.adoptData = this.formatData(this.adoptData);
        this.renderData();
        this.renderSearcher(this.adoptData);
        usePaginationStore.renderPagination(this.adoptData);
        // console.log(this.adoptData);
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    // 點擊按鈕顯示對應寵物詳細資料
    async fetchModal(id) {
      try {
        const url = this.MODAL_URL + id;
        const response = await axios.get(url);
        this.modalData = this.formatData(response.data.Data);
        // console.log(this.modalData);
      } catch (error) {
        console.error(error);
      }
    },
    // 將英文資料及一些日期格式化成需要的樣子
    formatData(data) {
      // 只渲染開放認養的動物
      data.filter((i) => i.animal_status === 'OPEN');
      return data.map((item) => {
        const formattedItem = { ...item };
        formattedItem.animal_sex = item.animal_sex === 'F' ? '母' : '公';
        formattedItem.album_file = item.album_file === '' ? './assets/images/noimg.png' : item.album_file;
        formattedItem.animal_foundplace = item.animal_foundplace === '' ? '尚未確認' : item.animal_foundplace;
        formattedItem.animal_sterilization = item.animal_sterilization === 'T' ? '已絕育' : '尚未絕育';
        switch (item.animal_bodytype) {
          case 'BIG':
            formattedItem.animal_bodytype = '大型';
            break;
          case 'MEDIUM':
            formattedItem.animal_bodytype = '中型';
            break;
          case 'SMALL':
            formattedItem.animal_bodytype = '小型';
            break;
          default:
            formattedItem.animal_bodytype_display = '尚未確認';
        }
        formattedItem.animal_inShelter = this.calcInShelterDays(item.animal_createtime);
        return formattedItem;
      });
    },
    // 計算入所天數
    calcInShelterDays(moveInShelterDay) {
      const todayDate = new Date();
      const str = moveInShelterDay.replace('-', '/');
      const openDate = new Date(str);
      const days = parseInt(Math.abs(todayDate - openDate) / 1000 / 60 / 60 / 24, 10);
      return days;
    },
    // card mode and list mode switcher
    switchRenderMode(isCardMode) {
      this.isCardMode = isCardMode;
    },
    // 之後改為使用 bs4 組件提示
    noFunctionBtn(e) {
      e.preventDefault();
      alert('這個按鈕目前沒有功能');
    },
    // 取得資料後依照當前資料內容動態新增搜尋欄選項
    renderSearcher(rawData) {
      rawData.forEach((i) => {
        if (i.shelter_name !== '' && !this.filtersList.shelter_name.includes(i.shelter_name)) {
          this.filtersList.shelter_name.push(i.shelter_name);
        }
        if (i.animal_colour !== '' && !this.filtersList.animal_colour.includes(i.animal_colour)) {
          this.filtersList.animal_colour.push(i.animal_colour);
        }
        if (i.animal_kind !== '' && !this.filtersList.animal_kind.includes(i.animal_kind)) {
          this.filtersList.animal_kind.push(i.animal_kind);
        }
      });
    },
    filterColourAndShelter() {
      if(this.filters.animal_kind !== '- 動物類別 -'){
        const tempData = this.adoptData.filter((item) => {
          return item.animal_kind === this.filters.animal_kind;
        });
        this.filtersList.animal_colour = [];
        this.filtersList.shelter_name = [];
        tempData.forEach((i) => {
          if (i.animal_colour !== '' && !this.filtersList.animal_colour.includes(i.animal_colour)) {
            this.filtersList.animal_colour.push(i.animal_colour);
          }
          if (i.shelter_name !== '' && !this.filtersList.shelter_name.includes(i.shelter_name)) {
            this.filtersList.shelter_name.push(i.shelter_name);
          }
        });
        if(!this.filtersList.animal_colour.includes(this.filters.animal_colour)){
          this.filters.animal_colour = '- 動物毛色 -';
        }
        if(!this.filtersList.shelter_name.includes(this.filters.shelter_name)){
          this.filters.shelter_name = '- 收容所 -';
        }
      } else {
        this.renderSearcher(this.adoptData);
        this.filters.animal_colour = '- 動物毛色 -';
        this.filters.shelter_name = '- 收容所 -';
      };
    },
    // 依據分頁狀態取得當前頁面分割資料
    getDataByPage(page) {
      const paginationData = this.filteredData.length ? this.filteredData : this.adoptData;
      const startIndex = (page - 1) * usePaginationStore.CARDS_PER_PAGE;
      // console.log(startIndex + parseInt(usePaginationStore.CARDS_PER_PAGE));
      // 改變 CARDS_PER_PAGE 時確保傳入的型別是 Number
      return paginationData.slice(startIndex, startIndex + parseInt(usePaginationStore.CARDS_PER_PAGE));
    },
    // 渲染當前頁面資料
    renderData() {
      this.pageData = this.getDataByPage(usePaginationStore.NOW_PAGE);
    },
    renderPage(page) {
      usePaginationStore.changeCurrentPage(page);
      this.renderData();
      usePaginationStore.renderPagination(this.filteredData.length > 0 ? this.filteredData : this.adoptData);
    },
    renderNextPage() {
      usePaginationStore.toNextPage();
      this.renderData();
    },
    renderPrePage() {
      usePaginationStore.toPrePage();
      this.renderData();
    },
    // searchBar 搜尋按鈕
    searchForm() {
      const searchData = {
        animal_kind: [],
        animal_colour: [],
        shelter_name: [],
        animal_id: [],
      };
      if (this.filters.animal_kind !== '- 動物類別 -') {
        searchData.animal_kind.push(this.filters.animal_kind);
      }
      if (this.filters.animal_colour !== '- 動物毛色 -') {
        searchData.animal_colour.push(this.filters.animal_colour);
      }
      if (this.filters.shelter_name !== '- 收容所 -') {
        searchData.shelter_name.push(this.filters.shelter_name);
      }
      if (this.filters.animal_id !== '') {
        const id = parseInt(this.filters.animal_id.trim());
        if (isNaN(id)){
          alert('請輸入「數字」以使用流水編號查詢');
          return;
        } else {
          searchData.animal_id.push(id);
        }
      }
      const isEmpty = Object.values(searchData).every((value) => Array.isArray(value)
      && value.length === 0);

      if (isEmpty) {
        alert('請填入查詢內容');
      } else {
        this.output(searchData);
        if (this.filteredData.length == 0) {
          alert('沒有符合條件的結果');
          this.resetSearch();
        } else {
          usePaginationStore.renderPagination(this.filteredData);
          usePaginationStore.NOW_PAGE = 1;
          this.renderData();
        }
      }
    },
    multiFilter(array, filters) {
      // 抓出所有篩選條件
      const filterKeys = Object.keys(filters);
      
      // 進行篩選
      return array.filter((item) => {
        // 檢查是否所有條件都符合
        let allConditionsMatch = true;
        
        // 遍歷所有篩選條件
        filterKeys.forEach((key) => {
          // 忽略沒有選項的條件
          if (!filters[key].length) return;
          
          // 檢查條件是否符合
          if (!filters[key].includes(item[key])) {
            allConditionsMatch = false;
          }
        });
        return allConditionsMatch;
      });
    },
    output(reserchTargets) {
      this.filteredData = this.multiFilter(this.adoptData, reserchTargets);
    },
    resetSearch() {
      this.filters = {
        animal_kind: '- 動物類別 -',
        animal_colour: '- 動物毛色 -',
        shelter_name: '- 收容所 -',
        animal_id: '',
      };
      this.filteredData = [];
      this.renderData();
      this.renderSearcher(this.adoptData);
      usePaginationStore.NOW_PAGE = 1;
      usePaginationStore.renderPagination(this.adoptData);
    },
    // 變更每頁卡片數量
    changePerPage(option) {
      usePaginationStore.CARDS_PER_PAGE = option;
      usePaginationStore.NOW_PAGE = 1;
      usePaginationStore.renderPagination(this.filteredData.length > 0 ? this.filteredData : this.adoptData);
      this.renderData();
    },
    getDataByClick() {
      usePaginationStore.NOW_PAGE += 1;
      if(this.filteredData.length){
        this.pageData = this.filteredData.slice(0, usePaginationStore.NOW_PAGE * usePaginationStore.CARDS_PER_PAGE);
      } else {
        this.pageData = this.adoptData.slice(0, usePaginationStore.NOW_PAGE * usePaginationStore.CARDS_PER_PAGE);
      }
      usePaginationStore.renderPagination(this.filteredData.length > 0 ? this.filteredData : this.adoptData);
    },
  },
});
