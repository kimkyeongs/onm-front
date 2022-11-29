<template>
  <div class="pagination">
    <button
      class="btn-paging first"
      v-if="pageSetting.first !== null"
      @click="pageSetting.first !== null ? addClass(pageSetting.first) : ''"
    >
      <span class="blind">처음페이지</span>
    </button>
    <button
      class="btn-paging prev"
      v-if="pageSetting.prevFirst !== null"
      @click="
        pageSetting.prevFirst !== null ? addClass(pageSetting.prevFirst) : ''
      "
    >
      <span class="blind">이전</span>
    </button>
    <ul>
      <!-- <li
        v-for="(n, idx) in 10"
        :key="n.idx"
        :class="{ active: isActive === idx }"
        @click="addClass(idx)"
      >
        {{ n }}
      </li> -->
      <li
        v-for="page in pageSetting.list"
        :key="page"
        type="button"
        :class="{ active: isActive === page }"
        @click="addClass(page)"
      >
        {{ page }}
      </li>
    </ul>
    <button
      type="button"
      class="btn-paging next"
      v-if="pageSetting.prevEnd !== null"
      @click="pageSetting.prevEnd !== null ? addClass(pageSetting.prevEnd) : ''"
    >
      <span class="blind">다음</span>
    </button>
    <button
      type="button"
      class="btn-paging last"
      v-if="pageSetting.end !== null"
      @click="pageSetting.end !== null ? addClass(pageSetting.end) : ''"
    >
      <span class="blind">마지막페이지</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["listCount", "customLimit", "currentPageProp"],
  data: () => ({
    page: 1,
    limit: 10,
    block: 10,
    pageSetting: [],
    isActive: 0,
  }),
  mounted() {
    if (this.currentPageProp == undefined) {
      this.addClass(this.page);
    } else {
      this.addClass(this.currentPageProp);
    }
  },
  methods: {
    addClass(page) {
      this.isActive = page;
      this.limit = this.customLimit;
      this.pagingMethod(page);
      this.$emit("paging", { page: this.page, rows: this.limit });
    },
    pagingMethod(page) {
      // this.sliceData = this.listData.slice(
      //   (page - 1) * this.limit,
      //   page * this.limit
      // );
      this.page = page;
      this.pageDataSetting(this.listCount, this.limit, this.block, page);
    },
    pageDataSetting(total, limit, block, page) {
      const totalPage = Math.ceil(total / limit);
      let currentPage = page;
      const first = currentPage > 1 ? parseInt(1, 10) : null;
      var prevFirst = 0;
      if (currentPage > 10 && totalPage > 10) {
        prevFirst = parseInt(currentPage, 10) - parseInt(10, 10);
      } else if (currentPage <= 10 && currentPage != 1) {
        prevFirst = parseInt(1, 10);
      } else if (currentPage == 1) {
        prevFirst = null;
      }

      const end = totalPage !== currentPage ? parseInt(totalPage, 10) : null;
      var prevEnd = 0;
      if (totalPage !== currentPage && currentPage + 10 <= totalPage) {
        prevEnd = parseInt(currentPage, 10) + parseInt(10, 10);
      } else if (totalPage !== currentPage && currentPage + 10 > totalPage) {
        prevEnd = parseInt(totalPage, 10);
      } else if (currentPage == totalPage) {
        prevEnd = null;
      }

      let startIndex = (Math.ceil(currentPage / block) - 1) * block + 1;
      let endIndex =
        startIndex + block > totalPage ? totalPage : startIndex + block - 1;
      let list = [];
      for (let index = startIndex; index <= endIndex; index++) {
        list.push(index);
      }
      //return { prevFirst, prevEnd, first, end, list, currentPage };
      this.pageSetting = { prevFirst, prevEnd, first, end, list, currentPage };
    },
  },
};
</script>

<style scoped>
.pagination .btn-paging,
.pagination li {
  width: 32px;
  height: 32px;
  line-height: 28px;
  margin-left: 6px;
  text-align: center;
  /* border-radius: 4px;
    border: 1px solid #d4dde0;
    background-color: #f8f9fb; */
}
.pagination,
.pagination > ul {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination li {
  font-size: 14px;
  color: #777;
  cursor: pointer;
}
.pagination li.active {
  font-weight: bold;
  color: #fff;
  background-color: #f47725;
  border-radius: 4px;
}
.pagination button.first {
  background: url("@/assets/images/icon-first@2x.png") center no-repeat;
  background-size: 24px 24px;
}
.pagination button.prev {
  background: url("@/assets/images/icon-prev@2x.png") center no-repeat;
  background-size: 24px 24px;
}
.pagination button.next {
  background: url("@/assets/images/icon-next@2x.png") center no-repeat;
  background-size: 24px 24px;
}
.pagination button.last {
  background: url("@/assets/images/icon-last@2x.png") center no-repeat;
  background-size: 24px 24px;
}
</style>
