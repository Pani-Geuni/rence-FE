<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="contentWrap">
    <div class="loginWrap">
      <div class="logo-section master-login">
        <img src="@/assets/IMG/common/Rence-Master.svg" alt="Master Logo" class="logo-mku">
      </div>
      <!-- END logoSection -->

      <div class="inputSection">
        <input id="master-id" type="text" placeholder="관리자 아이디를 입력하세요" /> <input id="master-pw" type="password"
          placeholder="비밀번호를 입력하세요" />
      </div>
      <!-- END inputSection -->

      <button id="btn-master-login" class="btn-master-login">로그인</button>
    </div>
    <!-- END loginWrap -->
  </div>
  <!-- END contentWrap -->

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
  </div>
</template>

<style scoped>
@import '@/assets/CSS/master/master-login.css';
</style>

<script>

</script>
