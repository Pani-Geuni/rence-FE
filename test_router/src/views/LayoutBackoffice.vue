<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
  <div class="pageWrap">
    <HeaderView />
    <router-view></router-view>
    <FooterView />
  </div>

  <div class="popup-background blind">

    <!-- START LOGIN SECTION -->
    <div id="login-section" class="blind">
      <section class="login-popup-logo-section">
        <img src="@/assets/IMG/common/RENCE-Host.svg" alt="Host Logo" class="popup-logo host-login-popup-logo">
      </section>
      <section class="login-popup-input-section">
        <input type="text" id="login-id" class="login-popup-input" name="username" placeholder="사업자 등록 번호를 입력하세요."
          autocomplete="off" />
        <input type="password" id="login-pw" class="login-popup-input" name="password" placeholder="비밀번호를 입력하세요." />
      </section>
      <section class="login-popup-btn-section">
        <input type="button" id="login-btn" value="로그인">
        <div class="txt-btn-wrap">
          <span id="go-find-pw" class="txt-btn">비밀번호 찾기</span>
          <span id="host-login-close" class="txt-btn login-close">창닫기</span>
        </div>
      </section>
    </div>
    <!-- END LOGIN SECTION -->

    <!-- START FIND-PW SECTION -->
    <div id="find-pw-section" class="find-section blind">
      <section class="find-popup-logo-section">
        <span>비밀번호 찾기</span>
      </section>
      <section class="find-popup-input-section">
        <div class="email-wrap">
          <span class="find-guide-txt">사업자 이메일을 입력해주세요.</span>
          <input type="email" id="find-pw-email" class="find-popup-input" placeholder="이메일을 입력하세요." />
        </div>
        <div>
          <span class="find-guide-txt">사업자 등록 번호를 입력해 주세요.</span>
          <input type="text" id="find-pw-backoffice-code" class="find-popup-input" placeholder="사업자 등록 번호를 입력하세요." />
        </div>
      </section>
      <section class="find-popup-btn-section">
        <input type="button" id="find-pw-btn" class="find-btn" value="비밀번호 찾기" />
        <input type="button" id="find-pw-close" class="find-pw-close" value="창닫기" />
      </section>
    </div>
    <!-- END FIND-PW SECTION -->

    <!-- START LOGOUT CONFIRM POPUP -->
    <div id="logout-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="logout-txt">
          로그아웃 하시겠습니까?<br><br>
          로그아웃 시 메인페이지로 이동됩니다.
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="logout-btn" class="confirm-yesBtn">로그아웃</div>
        <div id="logout-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END logout popup -->

    <!-- START FAIL CUSTOM ALERT POPUP -->
    <div id="fail-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span>올바른 정보를 입력해 주세요.</span>
      </section>
      <section id="fail-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>
  </div>

  <div class="popup-background blind">
    <!-- START SPINNER SECTION -->
    <div id="spinner-section" class="blind">
      <img src="@/assets/IMG/common/spinner.gif" alt="spinner" class="spinner-img">
    </div>
    <!-- END SPINNER SECTION -->

    <!-- START COMMON CUSTOM ALERT POPUP -->
    <div id="common-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span class="common-alert-txt"></span>
      </section>
      <section id="common-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>
  </div>
</template>

<style>
@import '@/assets/CSS/common/common.css';
@import '@/assets/CSS/backoffice/host-header.css';
</style>

<script>
// import '@/assets/JS/backoffice/host_header';
import HeaderView from '@/components/backoffice/common/HeaderView.vue';
import FooterView from '@/components/office/common/FooterView.vue';

export default {
  name: 'LayoutBackoffice',
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
