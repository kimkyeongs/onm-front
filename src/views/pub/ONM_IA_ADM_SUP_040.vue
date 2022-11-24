<template>
  <section class="onmContent">
    <head-title title="공통코드관리"/>
    <div class="flex-row">
      <!-- 대분류코드 -->
      <div class="col-lg-6 col-md-12">
        <div class="title-inline">
          <sub-title title="대분류코드" />
          <grid-search-single />
        </div>
        <sample-ag-grid />
        <div class="btn-area text-right">
          <div class="pull-left">
            <button type="button" class="btn btn-default btn-darkGreen btn-fixed">엑셀다운로드</button>
          </div>
          <div class="pull-right">
            <button type="button" class="btn btn-default btn-orange btn-fixed">등록</button>
          </div>
        </div>
      </div>
      <!-- 소분류코드 -->
      <div class="col-lg-6 col-md-12 subject">
        <div class="title-inline">
          <div class="title-inline">
            <sub-title title="소분류코드" />
            <div class="code-class ml-2">
              <strong>[선택대분류]</strong>
              <span class="ml-1">CO00021 (충전기에러코드)</span>
            </div>
          </div>     
          <grid-search-single />
        </div>
        <sample-ag-grid />
        <div class="btn-area text-right">
          <button type="button" class="btn btn-default btn-orange btn-fixed">등록</button>
        </div>
      </div>
    </div>
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
import SampleAgGrid from '@/components/SampleAgGrid'
import GridSearchSingle from '@/components/GridSearchSingle'

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    SampleAgGrid,
    GridSearchSingle
  },
  data() {
    return {
      useGuideLists: [
        '- 이 페이지는 플랫폼통합관리자가 전체 고객사(CPO)에 공통적용되는 공통코드를 관리하는 페이지로 플랫폼통합관리자만 사용이 가능합니다.',
        '- 공통코드를 사용/미사용은 전체 고객사(CPO)에 영향을 미치는 중요한 옵션입니다. 대분류를 미사용시 연결된 소분류도 미사용으로 처리 되며, 관련 보기/등록/상세/수정에서 각 값이 표시하는 부분이 비활성화 됩니다.',
        '- 엑셀다운로드는 대분류코드와 소분류코드가 모두 표시되어 다운로드 됩니다.',
      ]
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>