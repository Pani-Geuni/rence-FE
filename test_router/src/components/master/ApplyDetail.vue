<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <section class="space-detail-introduce-section">
      <div class="space-detail-introduce-wrap">
        <section class="space-detail-title-section">
          <span id="backoffice_no" class="space-detail-company-name blind">
            {{ vo.backoffice_no }}
          </span>
          <span class="space-detail-company-name">
            {{ vo.company_name }}
          </span>
          <span v-for="backoffice_type in backoffice_type" :key="backoffice_type" class="space-detail-type">
            {{ backoffice_type }}
          </span>
        </section>

        <!-- END space-detail-title-section -->

        <section class="space-detail-info-section">
          <div class="space-tags">
            <span v-for="tag in backoffice_tag" :key="tag" class="space-info-text tag-txt">
              {{ tag }}
            </span>
          </div>
        </section>

        <section class="space-imgs-section">
          <div class="window">
            <ul class="container">
              <li class="img" v-for="backoffice_img in backoffice_image" :key="backoffice_img">
                <img :src="'https://rence.s3.ap-northeast-2.amazonaws.com/space/' + backoffice_img" alt=""
                  class="company-img" />
              </li>
            </ul>

            <div class="button-container">
              <span class="prev button-size">&lt;</span>
              <span class="next button-size">></span>
            </div>
          </div>
        </section>
        <!-- END space-imgs-section -->

        <section class="map-wrap ">
          <label class="map-title"> 상세 위치 지도 </label>
          <input type="hidden" id="location_addr" th:value="${vo.roadname_address}" />
          <input type="hidden" id="location_name" th:value="${vo.company_name}" />
          <div id="map"></div>
        </section>

        <section class="space-description-section">
          <h3 class="space-description-title">공간 소개</h3>
          <div class="space-description">
            {{ vo.backoffice_info }}
          </div>
        </section>
        <!-- END space-description-section -->

        <section class="space-options-section">
          <div class="space-option-wrap">
            <h5 class="space-option-title">옵션</h5>
            <ul class="option-list-wrap">
              <li class="option-list" v-for="option in backoffice_option" :key="option">
                {{ option }}
              </li>
            </ul>
          </div>
          <div class="space-option-wrap">
            <h5 class="space-option-title">주변 시설</h5>
            <ul class="option-list-wrap">
              <li class="option-list" v-for="around in backoffice_around" :key="around">
                {{ around }}
              </li>
            </ul>
          </div>
        </section>
        <!-- END space-options-section -->

        <section class="host-info-section">
          <div class="host-info-wrap">
            <div class="host-info-item">
              <h5 class="host-info-item-title">사업자 이름</h5>
              <span class="host-info-item-content">{{ vo.owner_name }}</span>
            </div>
            <div class="host-info-item">
              <h5 class="host-info-item-title">상호 명</h5>
              <span class="host-info-item-content">{{ vo.backoffice_name }}</span>
            </div>
            <div class="host-info-item">
              <h5 class="host-info-item-title">사업자 등록 번호</h5>
              <span class="host-info-item-content">{{ vo.backoffice_id }}</span>
            </div>
            <div class="host-info-item">
              <h5 class="host-info-item-title">사업체 전화 번호</h5>
              <span class="host-info-item-content">{{ vo.backoffice_tel }}</span>
            </div>
            <div class="host-info-item">
              <h5 class="host-info-item-title">사업체 명</h5>
              <span class="host-info-item-content">{{ vo.company_name }}</span>
            </div>
            <div class="host-info-item">
              <h5 class="host-info-item-title">사업체 이메일</h5>
              <span id="backoffice_email" class="host-info-item-content">
                {{ vo.backoffice_email }}
              </span>
            </div>
          </div>
          <!-- END host-info-wrap -->
          <div class="host-info-item">
            <h5 class="host-info-item-title-location">사업장 위치</h5>
            <span class="host-info-item-content-location">
              {{ vo.roadname_address }} {{ vo.detail_address }}
            </span>
          </div>
        </section>
        <!-- END host-info-section -->

        <section class="button-group-section">
          <div v-if="page == 'apply'">
            <input type="button" id="btn-grant-host" class="btn-item accept" value="승인" />
            <input type="button" id="btn-refuse-host" class="btn-item refuse" value="거절" />
          </div>
          <div v-if="page == 'delete'">
            <input type="button" id="btn-delete-host" class="btn-item delete" value="삭제" />
          </div>
        </section>
      </div>
      <!-- END space-detail-introduce-wrap -->
    </section>
    <!-- END space-detail-introduce-section -->

  </div>
</template>

<style scoped>
@import '@/assets/CSS/master/master-detail.scss';
</style>

<script>
// import axios from 'axios';
import '@/assets/JS/master/master';

export default {
  name: 'ApplyDetail',
  data() {
    return {
      backoffice_type: ['desk', 'meeting'],
      backoffice_tag: ['tag1', 'tag2'],
      backoffice_option: ['option1', 'option2'],
      backoffice_around: ['around1', 'around2'],
      backoffice_image: ['space1.jpeg', 'space2.jpeg'],
      page: 'apply',
      vo: {
        backoffice_no: 'B1001',
        owner_name: 'tester',
        backoffice_id: '1234567890',
        backoffice_name: 'test!!',
        company_name: 'test11',
        backoffice_tel: '010-1234-1234',
        backoffice_email: 'test@test.com',
        roadname_address: 'road road',
        detail_address: 'detail road',
        backoffice_info: 'asdfasdfalskdjf;alksdj;fak',
      },
    };
  },
};

</script>

<!-- TODO : KAKAO MAP -->
