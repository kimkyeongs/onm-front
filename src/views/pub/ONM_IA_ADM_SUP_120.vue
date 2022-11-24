<template>
  <section class="onmContent">
    <head-title title="충전기 연결포트 통계"/>
    <div class="gridMultiSearch mb-4">
      <div class="searchGroup">
        <label for="">연결포트 선택</label>
        <v-select
          :items="items"
          class="selectBox"
          style="width: 200px;"
          label="선택"
          dense
          solo />
      </div>
    </div>
    <sub-title title="2022-11-01 12:12 현재" />
    <div class="flex-row">
      <!-- 충전기 연결포트 통계 -->
      <div class="col-lg-6 col-md-12">
        <div class="table tableList">
          <table>
            <caption class="sr-only">배치 기본정보</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
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
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>부산광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>대구광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>인천광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>광주광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>대전광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>울산광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>세종특별자치시</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- 충전기 연결포트 통계 -->
      <div class="col-lg-6 col-md-12 subject">
        <div class="table tableList">
          <table>
            <caption class="sr-only">배치 기본정보</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
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
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>부산광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>대구광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>인천광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>광주광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>대전광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>울산광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>세종특별자치시</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="btn-area text-right">
      <button type="button" class="btn btn-default btn-darkGreen">현재 연결 충전기 목록 엑셀  다운로드</button>
    </div>
    <div class="title-inline mb-20">
      <sub-title title="시간대별 통계" />
      <div class="gridMultiSearch">
        <div class="searchGroup">
          <label for="">권역선택</label>
          <v-select
            :items="items"
            class="selectBox"
            style="width: 200px;"
            label="선택"
            dense
            solo />
        </div>
        <div class="searchGroup">
          <label for="">시간간격</label>
          <v-select
            :items="items"
            class="selectBox"
            style="width: 200px;"
            label="선택"
            dense
            solo />
        </div>
      </div>
    </div>
    <!-- Highcharts -->
    <highcharts :options="chartOptions" style="height: 350px;" class="highcharts"/>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide
      :useGuideLists="useGuideLists" />
  </section>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import SubTitle from '@/components/SubTitle'
import UseGuide from '@/components/UseGuide'
import DatePicker from '@/components/DatePicker'
import { Chart } from 'highcharts-vue'

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    DatePicker,
    Chart
  },
  data() {
    return {
      useGuideLists: [
        '- 이 페이지는 충전기 8887포트를 통해 연결된 충전기수에 대한 통계로 플랫폼통합관리자만 사용이 가능합니다.',
      ],
      items: ['아이템-1', '아이템-2', '아이템-3'],
      chartOptions: {
        credits: {
          enabled: false // HightCharts Display
        },
        chart: {
          //type: 'column' // HightCharts Type
        },
        title: {
          text: ''
        },
        yAxis: {
          title: {
              text: ''
          }
        },
        xAxis: {
          categories: ['22:29', '22:30', '22:31', '22:32', '22:33', '22:34', '22:35', '22:36', '22:37', '22:38', '22:39']      
        },
        // navigation: {
        //   buttonOptions: {
        //       enabled: true
        //   }
        // },
        // colors: ['#21b7fa', '#0357ad','#fa219c', '#1aba00']
        series: [
          {
            name: '서울특별시',
            data: [1, 20, 60, 80, 120, 30, 70, 50, 40, 150, 23]
          },
          {
            name: '부산광역시',
            data: [45, 68, 96, 2, 60, 80, 79, 98, 110, 150, 96]
          },
          {
            name: '대구광역시',
            data: [77, 89, 12, 65, 78, 32, 79, 93, 12, 79, 10]
          },
          {
            name: '인천광역시',
            data: [78, 93, 5, 96, 78, 63, 25, 78, 96, 135, 25]
          },
          {
            name: '대전광역시',
            data: [67, 55, 81, 11, 89, 18, 27, 17, 53, 96, 73]
          },
          {
            name: '울산광역시',
            data: [21, 55, 81, 24, 89, 81, 18, 17, 53, 96, 73]
          },
          {
            name: '세종특별자치시',
            data: [28, 55, 81, 248, 89, 118, 182, 73, 13, 96, 73]
          }
        ],
      }
    }
  },
  computed: {
  },
  created() {
  }, 
  watch: {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>