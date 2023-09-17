import { defineStore } from 'pinia';

export default defineStore('paginationStore', {
  state: () => ({
    CARDS_PER_PAGE: 12, // 希望一頁有幾張卡片
    NOW_PAGE: 1, // 當前頁面
    paginatorLength: 11, // 想顯示幾個頁碼
    pageArr: [],
    totalPage: 0,
  }),
  actions: {
    // 計算及產生分頁器陣列
    renderPagination(rawData) {
      this.pageArr = [];
      const total = Math.ceil(rawData.length / this.CARDS_PER_PAGE);
      this.totalPage = total;

      // 總頁數小於顯示頁碼的情況下:全部顯示
      if (total < this.paginatorLength) {
        for (let i = 0; i < total; i += 1) {
          this.pageArr.push(i + 1);
        }
      } else {
        // 總頁數超過 paginatorLength 的情況:當前頁面偏向頁首、頁尾或中間
        const max = this.paginatorLength - 3; // 扣掉省略號佔的一格及前或後方固定顯示的兩個頁碼
        // 當前頁面偏向頁首時
        if (this.NOW_PAGE <= max) {
          // 前段顯示的頁碼
          for (let i = 0; i < max; i += 1) {
            this.pageArr.push(i + 1);
          }
          // 補齊後面的頁碼
          this.pageArr.push(max + 1, '...', total);
          // 當前頁面偏向頁尾時
        } else if (this.NOW_PAGE > total - max) {
          // 後段顯示的頁碼
          for (let i = 0; i < max; i += 1) {
            this.pageArr.unshift(total - i);
          }
          // 補齊前面的頁碼
          this.pageArr.unshift(1, '...', total - max);
          // 當前頁面在中間時
        } else {
          const around = (this.paginatorLength - 7) / 2; // 減去前後固定顯示的兩頁、省略號以及當前頁
          const leftArr = []; // 當前頁左方的頁碼
          const rightArr = []; // 當前頁右方的頁碼
          // 湊足中間顯示的頁碼
          for (let i = 1; i <= around; i += 1) {
            leftArr.unshift(this.NOW_PAGE - i);
            rightArr.push(this.NOW_PAGE + i);
          }
          // 組合中段並補齊前後段
          this.pageArr = leftArr.concat(this.NOW_PAGE, rightArr);
          this.pageArr.push('...', total - 1, total);
          this.pageArr.unshift(1, 2, '...');
        }
      }
      // console.log(this.pageArr);
    },
    changeCurrentPage(page) {
      this.NOW_PAGE = page;
    },
    toNextPage() {
      // console.log(this.NOW_PAGE);
      if (this.NOW_PAGE !== this.totalPage) {
        this.NOW_PAGE += 1;
      }
    },
    toPrePage() {
      if (this.NOW_PAGE !== 1) {
        this.NOW_PAGE -= 1;
      }
    },
  },
});
