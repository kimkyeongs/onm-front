<template>
  <section class="onmContent">
    <head-title title="충전기 연결포트 통계" />
    <div class="gridMultiSearch mb-4">
      <div class="searchGroup">
        <label for="">연결포트 선택</label>
        <v-select
          :items="items"
          class="selectBox"
          style="width: 200px"
          label="선택"
          dense
          solo
          v-model="port"
        />
      </div>
    </div>
    <sub-title title="2022-11-01 12:12 현재" />
    <div class="flex-row">
      <!-- 충전기 연결포트 통계 -->
      <div class="col-lg-6 col-md-12">
        <div class="table tableList">
          <table>
            <caption class="sr-only">
              배치 기본정보
            </caption>
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">지역</th>
                <th scope="col">통계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><span>전체</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>서울특별시</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>부산광역시</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>대구광역시</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>인천광역시</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>광주광역시</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>대전광역시</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>울산광역시</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>세종특별자치시</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 충전기 연결포트 통계 -->
      <div class="col-lg-6 col-md-12 subject">
        <div class="table tableList">
          <table>
            <caption class="sr-only">
              배치 기본정보
            </caption>
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">지역</th>
                <th scope="col">통계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><span>경기도</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>강원도</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>충청북도</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>충청남도</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>전라북도</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>전라남도</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>경상북도</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>경상남도</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
              <tr>
                <th scope="row"><span>제주특별자치도</span></th>
                <td>[연결] 999 (99.9%) / [전체] 999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="btn-area text-right">
      <button
        type="button"
        class="btn btn-default btn-darkGreen"
        @click="fnExcelDownload"
      >
        현재 연결 충전기 목록 엑셀 다운로드
      </button>
    </div>
    <div class="title-inline mb-20">
      <sub-title title="시간대별 통계" />
      <div class="gridMultiSearch">
        <div class="searchGroup">
          <label for="">권역선택</label>

          <v-combobox
            :items="region"
            class="multiCombox text-crop"
            style="width: 200px"
            label="멀티선택"
            hide-selected
            multiple
            small-chips
            solo
            return-object
            item-text="itemKey"
            item-value="itemValue"
            @change="fnSelectRegion"
            v-model="regionModel"
          >
            <template v-slot:selection="{ item, parent }">
              <v-chip label>
                <span>
                  {{ item.itemKey }}
                </span>
                <v-icon small @click="parent.selectItem(item)">
                  $delete
                </v-icon>
              </v-chip>
            </template>
          </v-combobox>
          <!-- <v-select
            :items="region"
            item-text="itemKey"
            item-value="itemValue"
            class="selectBox"
            style="width: 200px"
            label="선택"
            dense
            solo
            return-object
            @change="fnSelectRegion"
          /> -->
        </div>
        <div class="searchGroup">
          <label for="">시간간격</label>
          <v-select
            :items="timeInterval"
            item-text="itemKey"
            item-value="itemValue"
            class="selectBox"
            style="width: 200px"
            label="선택"
            dense
            solo
            return-object
            @change="fnSelectInterval"
            v-model="intervalModel"
          />
        </div>
      </div>
    </div>
    <!-- Highcharts -->
    <highcharts
      :options="chartOptions"
      style="height: 350px"
      class="highcharts"
    />
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide :useGuideLists="useGuideLists" />
  </section>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";
import SubTitle from "@/components/SubTitle";
import UseGuide from "@/components/UseGuide";
import DatePicker from "@/components/DatePicker";
import { Chart } from "highcharts-vue";
//엑셀 다운로드
import { excelDownload } from "@/api/stat_api";
import { getExcelFileds } from "@/components/js/excelFileds";
import { getNowDate, getNowTime } from "@/utils/dataFormatUtils";

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    DatePicker,
    Chart,
    excelDownload,
  },
  data() {
    return {
      useGuideLists: [
        "- 이 페이지는 충전기 8887포트를 통해 연결된 충전기수에 대한 통계로 플랫폼통합관리자만 사용이 가능합니다.",
      ],
      items: ["8887"],
      region: [
        { itemKey: "서울특별시", itemValue: "0" },
        { itemKey: "부산광역시", itemValue: "1" },
        { itemKey: "대구광역시", itemValue: "2" },
      ],
      timeInterval: [
        { itemKey: "1분", itemValue: "0" },
        { itemKey: "10분", itemValue: "1" },
        { itemKey: "60분", itemValue: "2" },
        { itemKey: "1일", itemValue: "3" },
        { itemKey: "1주", itemValue: "4" },
        { itemKey: "1달", itemValue: "5" },
      ],
      port: "8887",
      chartOptions: {
        credits: {
          enabled: false, // HightCharts Display
        },
        chart: {
          //type: 'column' // HightCharts Type
        },
        title: {
          text: "",
        },
        yAxis: {
          title: {
            text: "",
          },
        },
        xAxis: {
          categories: [],
        },
        // navigation: {
        //   buttonOptions: {
        //       enabled: true
        //   }
        // },
        // colors: ['#21b7fa', '#0357ad','#fa219c', '#1aba00']
        series: [],
      },
      data: {
        categories: [
          "22:29",
          "22:30",
          "22:31",
          "22:32",
          "22:33",
          "22:34",
          "22:35",
          "22:36",
          "22:37",
          "22:38",
          "22:39",
        ],
        series: [
          {
            name: "서울특별시",
            data: [1, 20, 60, 80, 120, 30, 70, 50, 40, 150, 23],
          },
          {
            name: "부산광역시",
            data: [45, 68, 96, 2, 60, 80, 79, 98, 110, 150, 96],
          },
          {
            name: "대구광역시",
            data: [77, 89, 12, 65, 78, 32, 79, 93, 12, 79, 10],
          },
          {
            name: "인천광역시",
            data: [78, 93, 5, 96, 78, 63, 25, 78, 96, 135, 25],
          },
          {
            name: "대전광역시",
            data: [67, 55, 81, 11, 89, 18, 27, 17, 53, 96, 73],
          },
          {
            name: "울산광역시",
            data: [21, 55, 81, 24, 89, 81, 18, 17, 53, 96, 73],
          },
          {
            name: "세종특별자치시",
            data: [28, 55, 81, 248, 89, 118, 182, 73, 13, 96, 73],
          },
        ],
      },
      data1: {
        categories: [
          " 22:00",
          " 22:10",
          " 22:20",
          " 22:30",
          " 22:40",
          " 22:50",
          " 23:00",
          " 23:10",
          " 23:20",
          " 23:30",
          " 23:40",
        ],
        series: [
          {
            name: "서울특별시",
            data: [13, 134, 20, 12, 57, 120, 128, 36, 62, 80, 48],
          },
          {
            name: "부산광역시",
            data: [128, 115, 19, 106, 21, 99, 70, 72, 30, 11, 42],
          },
          {
            name: "대구광역시",
            data: [86, 138, 33, 123, 128, 37, 100, 91, 112, 52, 82],
          },
        ],
      },
      data2: {
        categories: [
          " 00:00",
          " 01:00",
          " 02:00",
          " 03:00",
          " 04:00",
          " 05:00",
          " 06:00",
          " 07:00",
          " 08:00",
          " 09:00",
          " 10:00",
          " 11:00",
        ],
        series: [
          {
            name: "서울특별시",
            data: [126, 28, 66, 12, 130, 56, 93, 42, 24, 108, 124],
          },
          {
            name: "부산광역시",
            data: [63, 23, 95, 137, 28, 106, 56, 109, 5, 104, 144],
          },
          {
            name: "대구광역시",
            data: [8, 125, 83, 92, 121, 3, 2, 24, 70, 113, 28],
          },
        ],
      },

      data3: {
        categories: [
          "22-12-10 22:00",
          "22-12-11 22:00",
          "22-12-12 22:00",
          "22-12-13 22:00",
          "22-12-14 22:00",
          "22-12-15 22:00",
          "22-12-16 22:00",
          "22-12-17 22:00",
          "22-12-18 22:00",
          "22-12-19 22:00",
          "22-12-20 22:00",
        ],
        series: [
          {
            name: "서울특별시",
            data: [123, 132, 130, 84, 138, 134, 41, 100, 2, 57, 146],
          },
          {
            name: "부산광역시",
            data: [26, 73, 130, 133, 133, 71, 141, 4, 101, 103, 125],
          },
          {
            name: "대구광역시",
            data: [134, 99, 46, 27, 8, 110, 49, 140, 110, 99, 69],
          },
        ],
      },
      data4: {
        categories: [
          "22-12-10 22:00",
          "22-12-17 22:00",
          "22-12-24 22:00",
          "22-12-31 22:00",
          "23-01-07 22:00",
          "23-01-14 22:00",
          "23-01-21 22:00",
          "23-01-28 22:00",
          "23-02-04 22:00",
          "23-02-11 22:00",
          "23-02-18 22:00",
        ],
        series: [
          {
            name: "서울특별시",
            data: [141, 64, 33, 62, 107, 57, 18, 32, 49, 44, 145],
          },
          {
            name: "부산광역시",
            data: [80, 95, 47, 137, 32, 72, 49, 117, 88, 51, 95],
          },
          {
            name: "대구광역시",
            data: [45, 27, 12, 5, 74, 146, 3, 42, 29, 124, 141],
          },
        ],
      },
      data5: {
        categories: [
          "22-12-10 22:00",
          "23-01-10 22:00",
          "23-02-10 22:00",
          "23-03-10 22:00",
          "23-04-10 22:00",
          "23-05-10 22:00",
          "23-06-10 22:00",
          "23-07-10 22:00",
          "23-08-10 22:00",
          "23-09-10 22:00",
          "23-10-10 22:00",
        ],
        series: [
          {
            name: "서울특별시",
            data: [136, 58, 25, 42, 33, 12, 110, 101, 16, 29, 58],
          },
          {
            name: "부산광역시",
            data: [42, 35, 106, 129, 130, 62, 82, 26, 76, 63, 4],
          },
          {
            name: "대구광역시",
            data: [16, 117, 117, 42, 140, 107, 112, 11, 66, 118, 45],
          },
        ],
      },
      radomNum: [],
      regionModel: [],
      originRegion: [],
      intervalModel: {
        itemKey: "",
        itemValue: "",
      },
      excelFiledKey: "staticsManage",
    };
  },

  computed: {},
  created() {},
  watch: {},
  mounted() {
    this.chartOptions.xAxis.categories = this.data.categories;
    this.chartOptions.series = this.data.series;
  },
  methods: {
    //권역 선택시
    fnSelectRegion(e) {
      console.log(e);
      console.log(this.intervalModel);
      if (e.length > 0) {
        this.chartOptions.series = [];
        if (
          this.intervalModel.itemValue == "" ||
          this.intervalModel.itemValue == "0"
        ) {
          e.forEach((item) => {
            this.chartOptions.series.push(this.data.series[item.itemValue]);
          });
        } else if (this.intervalModel.itemValue == "1") {
          e.forEach((item) => {
            this.chartOptions.series.push(this.data1.series[item.itemValue]);
          });
        } else if (this.intervalModel.itemValue == "2") {
          e.forEach((item) => {
            this.chartOptions.series.push(this.data2.series[item.itemValue]);
          });
        } else if (this.intervalModel.itemValue == "3") {
          e.forEach((item) => {
            this.chartOptions.series.push(this.data3.series[item.itemValue]);
          });
        } else if (this.intervalModel.itemValue == "4") {
          e.forEach((item) => {
            this.chartOptions.series.push(this.data4.series[item.itemValue]);
          });
        } else if (this.intervalModel.itemValue == "5") {
          e.forEach((item) => {
            this.chartOptions.series.push(this.data5.series[item.itemValue]);
          });
        }
      } else {
        if (
          this.intervalModel.itemValue == "" ||
          this.intervalModel.itemValue == "0"
        ) {
          this.chartOptions.series = this.data.series;
        } else if (this.intervalModel.itemValue == "1") {
          this.chartOptions.series = this.data1.series;
        } else if (this.intervalModel.itemValue == "2") {
          this.chartOptions.series = this.data2.series;
        } else if (this.intervalModel.itemValue == "3") {
          this.chartOptions.series = this.data3.series;
        } else if (this.intervalModel.itemValue == "4") {
          this.chartOptions.series = this.data4.series;
        } else if (this.intervalModel.itemValue == "5") {
          this.chartOptions.series = this.data4.series;
        }
      }

      if (e.length == 0) {
      } else {
      }
    },
    //시간대 클릭시
    fnSelectInterval(e) {
      var tmp = this.regionModel;
      if (e.itemValue == "0") {
        if (this.regionModel.length > 0) {
          this.chartOptions.series = [];
          this.chartOptions.xAxis.categories = this.data.categories;
          tmp.forEach((item) => {
            this.chartOptions.series.push(this.data.series[item.itemValue]);
          });
        } else {
          this.chartOptions.xAxis.categories = this.data.categories;
          this.chartOptions.series = this.data.series;
        }
      } else if (e.itemValue == "1") {
        if (this.regionModel.length > 0) {
          this.chartOptions.series = [];
          this.chartOptions.xAxis.categories = this1.data.categories;
          tmp.forEach((item) => {
            this.chartOptions.series.push(this.data1.series[item.itemValue]);
          });
        } else {
          this.chartOptions.xAxis.categories = this.data1.categories;
          this.chartOptions.series = this.data1.series;
        }
      } else if (e.itemValue == "2") {
        if (this.regionModel.length > 0) {
          this.chartOptions.series = [];
          this.chartOptions.xAxis.categories = this.data2.categories;
          tmp.forEach((item) => {
            this.chartOptions.series.push(this.data2.series[item.itemValue]);
          });
        } else {
          this.chartOptions.xAxis.categories = this.data2.categories;
          this.chartOptions.series = this.data2.series;
        }
      } else if (e.itemValue == "3") {
        if (this.regionModel.length > 0) {
          this.chartOptions.series = [];
          this.chartOptions.xAxis.categories = this.data3.categories;
          tmp.forEach((item) => {
            this.chartOptions.series.push(this.data3.series[item.itemValue]);
          });
        } else {
          this.chartOptions.xAxis.categories = this.data3.categories;
          this.chartOptions.series = this.data3.series;
        }
      } else if (e.itemValue == "4") {
        if (this.regionModel.length > 0) {
          this.chartOptions.series = [];
          this.chartOptions.xAxis.categories = this.data4.categories;
          tmp.forEach((item) => {
            this.chartOptions.series.push(this.data4.series[item.itemValue]);
          });
        } else {
          this.chartOptions.xAxis.categories = this.data4.categories;
          this.chartOptions.series = this.data4.series;
        }
      } else if (e.itemValue == "5") {
        if (this.regionModel.length > 0) {
          this.chartOptions.series = [];
          this.chartOptions.xAxis.categories = this.data5.categories;
          tmp.forEach((item) => {
            this.chartOptions.series.push(this.data5.series[item.itemValue]);
          });
        } else {
          this.chartOptions.xAxis.categories = this.data5.categories;
          this.chartOptions.series = this.data5.series;
        }
      }
    },
    async fnExcelDownload() {
      var tmp = {};
      tmp = getExcelFileds(this.excelFiledKey);
      var nowdate = getNowDate();
      tmp.searchText1 = this.searchText1;
      tmp.searchText2 = this.searchText2;
      await excelDownload(tmp)
        .then((response) => {
          console.log(response.headers["content-length"]);
          if (response.headers["content-length"] == 0) {
            alert("데이터가 없습니다.");
          } else {
            const url = window.URL.createObjectURL(
              new Blob([response.data], {
                type: response.headers["content-type"],
              })
            );
            const link = document.createElement("a");
            link.href = url;
            link.download = tmp.excelNm + "_" + nowdate + ".xlsx";
            link.click();
          }
        })
        .catch((e) => {
          alert("fail : 33486");
        });
    },
  },
};
</script>

<style scoped></style>
