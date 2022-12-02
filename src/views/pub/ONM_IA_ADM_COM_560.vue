<template>
  <section class="onmContent">
    <head-title title="플랫폼 디자인 관리" />

    <div class="flex-row">  
      <!-- 로고 이미지 관리 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="로고 이미지 관리" />
        <div class="form-inline">
          <div class="upload-logo">
            <img src="@/assets/images/gallery@2x.png" style="width: 36px; height: 36px;" alt="Default Image">
          </div>
          <div class="ml-20">
            <ul class="font14">
              <li>- 업로드 한 로고 이미지는  좌측 메뉴 상단에 배치 됩니다.</li>
              <li>- 권장 이미지 사이즈: 가로200px, 세로45px, 바탕투명한 png 파일</li>
            </ul>
            <button type="button" class="btn btn-md btn-gray mt-20">변경</button>
          </div>
        </div>
        <sub-title class="mt-30" title="플랫폼 디자인 테마 관리" />
        <div class="design-themeGroup-wrap">
          <div class="themeGroup">
            <div class="themeBox">
              <img src="@/assets/images/gallery@2x.png" style="width: 36px; height: 36px;" alt="Default Image">
            </div>
            <v-radio-group v-model="desighTheme">
              <v-radio             
                label="기본테마"
                color="orange"
                value="theme-1" />
            </v-radio-group>
          </div>
          <div class="themeGroup">
            <div class="themeBox">
              <img src="@/assets/images/gallery@2x.png" style="width: 36px; height: 36px;" alt="Default Image">
            </div>
            <v-radio-group v-model="desighTheme">
              <v-radio
                label="###테마"
                color="orange" 
                value="theme-2" />
            </v-radio-group>  
          </div>
          <div class="themeGroup">
            <div class="themeBox">
              <img src="@/assets/images/gallery@2x.png" style="width: 36px; height: 36px;" alt="Default Image">
            </div>
            <v-radio-group v-model="desighTheme" >
              <v-radio             
                label="###테마"
                color="orange"
                value="theme-3" />
            </v-radio-group>
          </div>
          <div class="themeGroup">
            <div class="themeBox">
              <img src="@/assets/images/gallery@2x.png" style="width: 36px; height: 36px;" alt="Default Image">
            </div>
            <v-radio-group v-model="desighTheme" >
              <v-radio             
                label="###테마"
                color="orange"
                value="theme-4" />
            </v-radio-group>
          </div>
          <div class="themeGroup">
            <div class="themeBox">
              <img src="@/assets/images/gallery@2x.png" style="width: 36px; height: 36px;" alt="Default Image">
            </div>
            <v-radio-group v-model="desighTheme" >
              <v-radio             
                label="###테마"
                color="orange"
                value="theme-5" />
            </v-radio-group>
          </div>
        </div>
      </div>
      <!-- 플랫폼 푸터 정보관리-->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="플랫폼 푸터 정보관리" />
        <div class="table">
          <table>
            <caption class="sr-only">랫폼 푸터 정보관리</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><span>상호명</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="상호명">
                </td>
              </tr>
              <tr>
                <th scope="row"><span>대표자명</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="대표자명">
                </td>
              </tr>
              <tr>
                <th scope="row"><span>대표전화</span></th>
                <td>
                  <div class="form-inline">
                    <input type="text" class="form-control" placeholder="">
                    <span class="bridge">-</span>
                    <input type="text" class="form-control" placeholder="">
                    <span class="bridge">-</span>
                    <input type="text" class="form-control" placeholder="">
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"><span>고객센터</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>통신판매업신고번호</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="전기차충전사업">
                </td>
              </tr>
              <tr>
                <th scope="row"><span>주소</span></th>
                <td>
                  <div class="form-inline">
                    <input type="text" class="form-control" placeholder="우편번호" style="width: 100px;">
                    <button type="button" class="btn btn-md btn-gray ml-2">주소검색</button>
                  </div>
                  <input type="text" class="form-control mt-1" placeholder="큰주소">
                  <input type="text" class="form-control mt-1" placeholder="상세주소">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="btn-area text-right">
      <button type="button" class="btn btn-default btn-orange btn-fixed">저장</button> 
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide
      :useGuideLists="useGuideLists" />
  </section>
</template>

<script>
import HeadTitle from "@/components/HeadTitle"
import SubTitle from "@/components/SubTitle"
import UseGuide from "@/components/UseGuide"

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
  },
  data() {
    return {
      useGuideLists: [
        "- 플랫폼 디자인 관리 화면은 플랫폼의 로고, 로고아이콘, 디자인 테마 및 푸터 정보를 관리하는 화면 입니다."
      ],
      desighTheme: 'theme-1'
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>

</style>