<template>
  <section class="headerWrap">
    <div class="logo-section master">
      <img src="@/assets/IMG/common/Rence-Master.svg" alt="Master Logo" class="logo-mku master">
    </div>

    <ul class="header-nav-list">
      <li id="nav-item-agree" class="header-nav-item">업체 신청 업무</li>
      <li id="nav-item-delete" class="header-nav-item">업체 탈퇴 업무</li>
      <li class="header-nav-item">
        <button id="btn-logout" class="btn-logout">로그아웃</button>
      </li>
    </ul>
  </section>

</template>

<style lang="scss" scoped>
@import '@/assets/CSS/master/master-header.scss';
</style>

<script>
console.log('http://localhost:8081/master/login');

export default {
  name: 'HeaderView',
};

</script>
