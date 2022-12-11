<template>
  <div class="pageWrap">
    <HeaderView />
    <router-view></router-view>
    <!-- <FooterView /> -->
  </div>

  <div class="popup-background blind">
    <div id="grant-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="grant-txt">
          해당 호스트를 승낙하시겠습니까?
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="grant-btn" class="confirm-yesBtn">가입 승인</div>
        <div id="grant-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END grant popup -->

    <div id="refuse-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="refuse-txt">
          해당 호스트를 거절하시겠습니까?
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="refuse-btn" class="confirm-yesBtn">가입 거절</div>
        <div id="refuse-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END refuse popup -->

    <div id="delete-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="refuse-txt">
          해당 호스트의 탈퇴를 진행하시겠습니까?
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="delete-btn" class="confirm-yesBtn">호스트 삭제</div>
        <div id="delete-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END delete popup -->
  </div>

  <div class="popup-background blind">
    <!-- START COMMON CUSTOM ALERT POPUP -->
    <div id="common-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span class="common-alert-txt"></span>
      </section>
      <section id="common-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>

    <!-- START SUCCESS CUSTOM ALERT POPUP -->
    <div id="success-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span>해당 이메일로 비밀번호를 전송하였습니다.</span>
      </section>
      <section id="success-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>

    <!-- START FAIL CUSTOM ALERT POPUP -->
    <div id="fail-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span>이메일 혹은 사업자 등록 번호를 <br />
          다시 확인해 주세요</span>
      </section>
      <section id="fail-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/CSS/common/common.scss';
@import '@/assets/CSS/common/custom-table.css';

@import '@/assets/CSS/master/master-main.css';
</style>

<script>
// import '@/assets/JS/master/master';
import $ from 'jquery';
import HeaderView from /* webpackChunkName: "HeaderView" */ '@/components/master/common/HeaderView.vue';
// import FooterView from '@/components/office/common/FooterView.vue';

export default {
  name: 'LayoutMaster',
  components: {
    HeaderView,
    // FooterView,
  },
};
</script>
