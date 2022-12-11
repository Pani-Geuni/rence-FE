<!-- eslint-disable max-len -->
<template>
  <section class="headerWrap">
    <div class="logo-section host">
      <img src="@/assets/IMG/common/RENCE-Host.svg" alt="Host Logo" class="logo-mku host">
    </div>

    <div class="hostMenu-section ">
      <!-- 로그인 전 유저 메뉴 -->
      <section id="before_login" class="">
        <div id="before_hostMenu" class="hostMenu">
          <img src="@/assets/IMG/header/user_menu.svg" alt="host_menu_img" class="host_menu_img" />
          <img src="@/assets/IMG/header/bx_user-circle.png" alt="host_profile_img" class="host_profile_img" />
        </div>

        <!-- CUSTOM SELECT -->
        <div class="custom-select-host blind">
          <ul class="host-select-wrap">
            <li id="go-login" class="host-select-list">로그인</li>
            <li id="go-backOffice" class="host-select-list">호스트등록신청</li>
            <li id="go-user-home" class="host-select-list">Rence로 이동</li>
          </ul>
        </div>
      </section>
    </div>
  </section>

  <!-- 로그인 후 유저 메뉴 -->
  <!-- <section class="headerWrap">

    <div class="logo-section">
      <img src="/static/IMG/common/RENCE-Host.svg" alt="Host Logo" class="logo-mku">
    </div>

    <section id="after_login" class="">
      <div id="after_hostMenu" class="hostMenu">
        <img src="/static/IMG/header/user_menu.svg" alt="host_menu_img" class="host_menu_img" />
        <img src="https://rence.s3.ap-northeast-2.amazonaws.com/user/img_host_001.jpg" alt="host_profile_img"
          class="host_profile_img" />
      </div> -->
  <!-- CUSTOM SELECT -->
  <!-- <div class="custom-select-host blind">
        <ul class="host-select-wrap">
          <li id="go-user-home" class="host-select-list">Rence로 이동</li>
          <li id="go-dashboard" class="host-select-list">대시보드로 이동</li>
          <li id="go-logOut" class="host-select-list">로그아웃</li>
        </ul>
      </div>
    </section>
  </section> -->
</template>

<style>
@import '@/assets/CSS/backoffice/host-header.css';
@import '@/assets/CSS/backoffice/host-login.css';
</style>

<script>
import '@/assets/JS/backoffice/host_header';

console.log('backoffice header');

export default {
  name: 'HostHeaderView',
};
</script>
