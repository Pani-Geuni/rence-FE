<template>
  <section class="landingWrap">
    <div class="start-hosting">
      <h1 class="title-start-hosting">나의 공간을 공개해 볼까요?</h1>
      <button id="btn-start-hosting" class="btn-start-hosting">
        <p>호스팅 시작하기</p>
      </button>
    </div>

    <div class="apply-hosting">
      <h1 id="title-apply-hosting" class="title-apply-hosting">
        공간 공유 플랫폼, <br />Rence에서 시작하세요
      </h1>
      <button id="btn-apply-hosting" class="btn-apply-hosting">
        <p>호스트 신청하기</p>
      </button>
    </div>
  </section>
</template>

<style scoped>
@import '@/assets/CSS/backoffice/host-landing.css';
</style>

<script>
// import '@/assets/JS/backoffice/host_insert';
// import '@/assets/JS/backoffice/custom_timepicker';

export default {
  name: 'LandingView',
};
</script>
